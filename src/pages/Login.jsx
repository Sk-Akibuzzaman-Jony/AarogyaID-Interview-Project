import React, { useEffect } from "react";
import { useState } from "react";
import CTAButton from "../components/common/CTAButton";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../services/operations/authApi";
import { toast } from 'react-toastify';

const Login = () => {
  const userTypes = window.location.pathname === "/admin-login" ? ["Admin"] : ["Patient", "Healthcare Professional"];
  const [currentUserType, setCurrentUserType] = useState(userTypes[0]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // Check if the current path is "/admin-login"
    if (window.location.pathname === "/admin-login") {
      // If so, set the current user type to "Admin"
      setCurrentUserType("Admin");
    } else {
      // Otherwise, set it to the first user type in the array
      setCurrentUserType("Patient"); // Assuming "Patient" as default if not admin
    }
  }, []);

  const handelOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }
  const handelOnSubmit = (e) => {
    e.preventDefault();

    // This is temporarily done as we have no way of obtaining an Admin ID 
    if (currentUserType === 'Admin') {
      toast.error('Not an Administrator', {
        toastId: "123",
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
      return;
    }

    dispatch(login(formData.email, formData.password, navigate, dispatch));
  }


  return (
    <div className="flex flex-row w-5/12 mt-24 justify-center gap-16  mx-auto items-center mb-28 bg-richblue-5 rounded-xl shadow-2xl">
      <div className="flex flex-col items center w-[75%] ">
        <div className="text-black text-bold text-4xl pb-9 pt-9">Welcome Back{currentUserType === "Admin" && (<span> Administrator</span>)}</div>
        <div>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-black "
              >
                Your email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                class="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900 w-full dark:border-gray-600"
                placeholder="Enter Email Address"
                required=""
                onChange={handelOnChange}
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-black"
              >
                Password *
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                class="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900 w-full dark:border-gray-600"
                required=""
                onChange={handelOnChange}
              />
            </div>
            <div class="flex items-center justify-between pb-4 flex-row-reverse">
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 text-blue-100"
              >
                Forgot password?
              </a>
            </div>
            <button type="submit" onClick={handelOnSubmit}>
              <CTAButton active={true}>
                Sign In
              </CTAButton>
            </button>
            <p class="text-sm font-light text-black pb-9">
              Don’t have an account yet?{" "}
              <a
                href="/signup"
                class="font-medium text-primary-600 hover:underline text-orange-300"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
