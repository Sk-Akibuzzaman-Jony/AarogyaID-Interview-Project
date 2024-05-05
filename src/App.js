import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import TopBar from "./components/common/TopBar";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import VerifyOTP from "./pages/VerifyOTP";
import { ToastContainer } from 'react-toastify';
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";

// Function to check if token exists in local storage
const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return !!token; // Returns true if token exists, false otherwise
}

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-5 flex flex-col font-inter">
      <ToastContainer stacked />
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
        <Route path="/admin-login" element={<Login />} />
        {/* Protected route for Dashboard */}
        <Route path="/dashboard" element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
