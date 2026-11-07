import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check login when app starts
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {

      const storedToken = await AsyncStorage.getItem("token");
      const storedStudent = await AsyncStorage.getItem("student");

      if (storedToken) {
        setToken(storedToken);
        setIsLoggedIn(true);
      }

      if (storedStudent) {
        setStudent(JSON.parse(storedStudent));
      }

    } catch (error) {
      console.log("Check login error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Login
  const login = async (token, student) => {

    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem(
      "student",
      JSON.stringify(student)
    );

    setToken(token);
    setStudent(student);
    setIsLoggedIn(true);
  };

  // Logout
  const logout = async () => {

    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("student");

    setToken(null);
    setStudent(null);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        token,
        student,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;