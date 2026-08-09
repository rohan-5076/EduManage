import axios from "axios";

const API_URL = "http://localhost:5000/api/ai";

export const sendMessage = async (message) => {
  return await axios.post(`${API_URL}/chat`, {
    message,
  });
};