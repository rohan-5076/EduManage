import { Routes, Route } from "react-router-dom";

import Login from "../pages/Auth/Login";
import Dashboard from "../pages/Dashbords/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import StudentList from "../pages/Students/StudentList";
import AddStudent from "../pages/Students/AddStudent";
import Teachers from "../pages/Teachers/Teachers";
import Attendance from "../pages/Attendance/Attendance";
import StudentDashboard from "../pages/Dashbords/studentDashboard";
import StdDashboardLayout from "../layouts/StdDashboardLayout";
import StdAttendance from "../pages/StdAttendance/StdAttendance";
import StdCourse from "../pages/StdCourse/StdCourse";
import StdGrades from "../Pages/StdGrades/StdGrades"
import StdProfile from "../pages/StdProfile/StdProfile";
import AddCourse from "../pages/AddCourse/AddCourse";
import ListCourse from "../pages/AddCourse/ListCourse";
import AddSubject from "../pages/AddSubject/AddSubject";
import AiChat from "../pages/ai/AiChat";
import ListSubject from "../pages/AddSubject/ListSubject";
import AddExam from "../pages/Exams/AddExam";
import ListExam from "../pages/Exams/ListExam";
import MarksEntry from "../pages/Marks Entry/MarksEntry";
import ListFees from "../pages/Fees/ListFees";
import CollectFees from "../pages/Fees/CollectFees";
import AddNotice from "../pages/Notice/AddNotice";
import ListNotice from "../pages/Notice/ListNotice";
import StdSubjects from "../pages/StdSubjects/StdSubjects";
import StdExams from "../pages/StdExams/StdExams";
import StdResults from "../pages/Results/StdResults";
import TimeTable from "../pages/TimeTable/TimeTable";
import StdNotice from "../pages/StdNotice/StdNotice";
import StdSettings from "../pages/StdSettings.jsx/StdSettings";
import TeacherSettings from "../pages/TeacherSettings/TeacherSettings";
import AddTeacher from "../pages/Teachers/AddTeacher";

function AppRoutes() {
  return (
    <Routes>

      {/* Login Page */}
      <Route path="/" element={<Login />} />

      <Route  element={<StdDashboardLayout />} >
        
         <Route path="/student/dashboard" element={<StudentDashboard />} />
         <Route path="/student/attendance" element={<StdAttendance />} />
         <Route path="/student/courses" element={<StdCourse />} />
         <Route path="/student/grades" element={<StdGrades />} />
         <Route path="/student/Profile" element={<StdProfile />} />
         <Route path="/student/subjects" element={<StdSubjects />} />
         <Route path="/student/exams" element={<StdExams />} />
         <Route path="/student/results" element={<StdResults />} />
         <Route path="/student/timetable" element={<TimeTable />} />
         <Route path="/student/notices" element={<StdNotice />} />
         <Route path="/student/settings" element={<StdSettings />} />


      
      </Route>

      <Route element={<DashboardLayout />}>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/course" element={<ListCourse />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/add-subject" element={<AddSubject />} />
        <Route path="/list-subject" element={<ListSubject />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/exams" element={<ListExam />} />
        <Route path="/add-exam" element={<AddExam />} />
        <Route path="/marks-entry" element={<MarksEntry />} />
        <Route path="/fees" element={<ListFees />} />
        <Route path="/collect-fee" element={<CollectFees />} />
        <Route path="/notice" element={<ListNotice />} />
        <Route path="/add-notice" element={<AddNotice />} />
        <Route path="/teacher/settings" element={<TeacherSettings />} />
        <Route path="/add-teacher/" element={<AddTeacher />} />



        {/* AI Chat */}
        <Route path="/ai/chat" element={<AiChat />} />
        


      </Route>

    </Routes>
  );
}

export default AppRoutes;