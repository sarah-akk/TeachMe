import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import AuthPage from './layouts/AuthPage';
import Splash from './layouts/splash';
import OTPpage from './layouts/OTPpage';
import Confirmed from './layouts/Confirmed';
import Home from './layouts/Home';
import Statistics from './layouts/Statistics';
import Expert from './layouts/Users/Expert';
import ExpertDetail from './layouts/Users/ExpertDetail';
import Student from './layouts/Users/Student';
import StudentDetails from './layouts/Users/StudentDetails';
import Employees from './layouts/Employees';
import Requests from './layouts/Requests';
import ProfessorsInfo from './layouts/ProfessorsInfo';
import Courses from './layouts/Courses';
import AddCourse from './layouts/AddCourse';
import StudentRequest from './layouts/RechargeRequests/StudentRequest';
import StudentRequest2 from './layouts/DischargeRequest/StudentRequest';
import EducationalResources from './layouts/EducationalResources';
import Reports from './layouts/Reports';
import ChangePassword from './layouts/ChangePassword';
import Notifications from './layouts/Notifications';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<Splash/>} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/OTP" element={<OTPpage/>} />
      <Route path="/confirmed" element={<Confirmed/>} />
      <Route path="/home" element={<Home/>} >
      <Route path="statistics" element={<Statistics/>} />
      <Route path="users/expert" element={<Expert/>} />
      <Route path="users/expert/:id" element={<ExpertDetail/>} />
      <Route path="users/student" element={<Student/>} />
      <Route path="users/student/:id" element={<StudentDetails/>} />
      <Route path="employees" element={<Employees/>} />
      <Route path="requests" element={<Requests/>} />
      <Route path="professors-info" element={<ProfessorsInfo/>} />
      <Route path="courses" element={<Courses/>} />
      <Route path="courses/AddCourse" element={<AddCourse/>} />
      <Route path="wallet/recharge-requests/students" element={<StudentRequest/>} />educational-resources
      <Route path="wallet/discharge-requests/students" element={<StudentRequest2/>} />
      <Route path="educational-resources" element={<EducationalResources/>} />
      <Route path="reports" element={<Reports/>} />Notifications
      <Route path="change-password" element={<ChangePassword/>} />
      <Route path="notifications" element={<Notifications/>} />
      </Route>
       <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

export default App
