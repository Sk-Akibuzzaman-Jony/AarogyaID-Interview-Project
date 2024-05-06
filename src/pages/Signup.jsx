import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendOTP } from "../services/operations/authApi";
import CTAButton from "../components/common/CTAButton";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userTypes = ["Patient", "Healthcare Professional", "Admin"];
  const [currentUserType, setCurrentUserType] = useState(userTypes[0]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    address: "",
    pin: "",
    district: "",
    state: "",
    healthcareProfessionalType: "",
    healthcareSubcategory: "",
    governmentID: "",
    healthcareProfessionalID: "",
    phoneNumber: "",
  });

  const healthcareSubcategories = {
    Physician: ["Cardiologist", "Pediatrician", "Dermatologist", "Neurologist"],
    Nurse: ["Registered Nurse", "Nurse Practitioner", "Licensed Practical Nurse"],
    Therapist: [
      "Clinical Psychologist",
      "Marriage and Family Therapist",
      "Mental Health Counselor",
      "Substance Abuse Counselor",
      "Art Therapist",
      "Music Therapist",
      "Dance/Movement Therapist",
      "Occupational Therapist",
      "Speech-Language Therapist",
      "Physical Therapist",
      "Massage Therapist",
      "Rehabilitation Therapist",
      "Behavioral Therapist",
      "Play Therapist"
    ]
  };

  const handelOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handelOnSubmit = (e) => {
    e.preventDefault();

    // This is temporarily done as we have no way of obtaining an Admin ID 
    if (currentUserType === 'Admin') {
      toast.error('Invalid Admin ID', {
        toastId: "123",
        position: "top-center",
        hideProgressBar: true,
        autoClose: 3000,
      });
      return;
    }

    dispatch(
      sendOTP(
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.password,
        formData.confirmPassword,
        currentUserType,
        formData.healthcareProfessionalType,
        formData.healthcareSubcategory,
        formData.governmentID,
        formData.dob,
        formData.address,
        formData.pin,
        formData.district,
        formData.state,
        formData.healthcareProfessionalID,
        formData.phoneNumber,
        dispatch,
        navigate
      )
    );
  };

  return (
    <div className="flex flex-row w-5/12 mt-24 justify-center gap-16  mx-auto items-center mb-28 bg-richblue-5 rounded-xl shadow-2xl">
      <div className="flex flex-col items center w-[75%] ">
        <div className="">
          <div
            className="mt-11 mb-11 flex flex-row rounded-full w-full justify-between p-5 bg-richblack-5 border border-richblack-100
      px-1 py-1 "
          >
            {userTypes.map((element, index) => {
              return (
                <div
                  className={`text-sm flex flex-row items-center gap-2 w-fit
                ${currentUserType === element
                      ? "bg-orange-300 text-richblack-900 font-medium"
                      : "text-richblack-900"
                    } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-blue-300 hover:text-richblack-5 px-7 py-2`}
                  key={index}
                  onClick={() => setCurrentUserType(element)}
                >
                  {element}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <form className="space-y-4 md:space-y-6" action="#">
            <div className="flex flex-row gap-4 text-white">
              <div className="flex flex-col w-[50%]">
                <label
                  htmlFor="firstName"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="fname"
                  className="border border-richblack-400 text-richblack-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 "
                  placeholder="Enter First Name"
                  required=""
                  onChange={handelOnChange}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label
                  htmlFor="lastName"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lname"
                  className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                  placeholder="Enter Last Name"
                  required
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                Your email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                placeholder="Enter Email Address"
                required
                onChange={handelOnChange}
              />
            </div>
            <div>
              {/* Phone number field */}
              <div className="flex flex-col">
                <label
                  htmlFor="phoneNumber"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Phone Number *
                </label>
                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                  placeholder="Enter Phone Number"
                  required
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div>
              {/* Admin ID field */}
              {currentUserType === "Admin" && (
                <div className="flex flex-col">
                  <label
                    htmlFor="adminID"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Admin ID *
                  </label>
                  <input
                    type="text"
                    name="adminID"
                    id="adminID"
                    className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                    placeholder="Enter Admin ID"
                    required
                    onChange={handelOnChange}
                  />
                </div>
              )}
            </div>
            <div>
              {/* Dropdown for healthcare professional type */}
              {currentUserType === "Healthcare Professional" && (
                <div className="flex flex-col">
                  <label
                    htmlFor="healthcareProfessionalType"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Healthcare Professional Type *
                  </label>
                  <select
                    name="healthcareProfessionalType"
                    id="healthcareProfessionalType"
                    className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                    placeholder="Select Healthcare Professional Type"
                    onChange={handelOnChange}
                  >
                    <option value="">Select Healthcare Professional Type</option>
                    <option value="Physician">Physician</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Therapist">Therapist</option>
                  </select>
                </div>
              )}
            </div>
            <div>
              {/* Dropdown for healthcare subcategory */}
              {currentUserType === "Healthcare Professional" && (
                <div className="flex flex-col">
                  <label
                    htmlFor="healthcareSubcategory"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Healthcare Subcategory *
                  </label>
                  <select
                    name="healthcareSubcategory"
                    id="healthcareSubcategory"
                    className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                    onChange={handelOnChange}
                  >
                    <option value="">Select Healthcare Subcategory</option>
                    {healthcareSubcategories[formData.healthcareProfessionalType]?.map(
                      (subcategory, index) => (
                        <option key={index} value={subcategory}>
                          {subcategory}
                        </option>
                      )
                    )}
                  </select>
                </div>
              )}
            </div>
            {currentUserType === "Healthcare Professional" && (
                <div className="flex flex-col">
                  <label
                    htmlFor="healthcareProfessionalID"
                    className="block mb-2 text-sm font-medium text-gray-900 text-black"
                  >
                    Healthcare Professional ID *
                  </label>
                  <input
                    type="text"
                    name="healthcareProfessionalID"
                    id="healthcareProfessionalID"
                    className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                    placeholder="Enter Healthcare Professional ID"
                    required
                    onChange={handelOnChange}
                  />
                </div>
              )}
            <div>
              
              {/* Government ID field */}
              <div className="flex flex-col">
                <label
                  htmlFor="governmentID"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Government ID *
                </label>
                <input
                  type="text"
                  name="governmentID"
                  id="governmentID"
                  className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                  placeholder="Enter Government ID"
                  required
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div>
              {/* Date of Birth field */}
              <div className="flex flex-col">
                <label
                  htmlFor="dob"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Date of Birth (DDMMYYYY) *
                </label>
                <input
                  type="text"
                  name="dob"
                  id="dob"
                  className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                  placeholder="Enter Date of Birth"
                  required
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div>
              {/* Address field */}
              <div className="flex flex-col">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Address *
                </label>
                <textarea
                  name="address"
                  id="address"
                  className="border border-richblack-400 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 text-richblack-900"
                  placeholder="Enter Address"
                  required
                  onChange={handelOnChange}
                ></textarea>
              </div>
            </div>
            <div className="flex flex-row gap-4 text-white">
              <div className="flex flex-col w-[50%]">
                <label
                  htmlFor="pin"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  PIN *
                </label>
                <input
                  type="text"
                  name="pin"
                  id="pin"
                  className="border border-richblack-400 text-richblack-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 "
                  placeholder="Enter PIN"
                  required
                  onChange={handelOnChange}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label
                  htmlFor="district"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  District *
                </label>
                <input
                  type="text"
                  name="district"
                  id="district"
                  className="border border-richblack-400 text-richblack-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-4 bg-richblack-5 dark:border-gray-600"
                  placeholder="Enter District"
                  required
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 text-black"
              >
                State *
              </label>
              <input
                type="text"
                name="state"
                id="state"
                className="border border-richblack-400 text-richblack-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600"
                placeholder="Enter State"
                required
                onChange={handelOnChange}
              />
            </div>
            <div className="flex flex-row gap-4 text-white">
              <div className="flex flex-col w-[50%]">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium  text-black"
                >
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-richblack-400 text-richblack-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 bg-richblack-5 dark:border-gray-600 "
                  placeholder="Enter Password"
                  required
                  onChange={handelOnChange}
                />
              </div>
              <div className="flex flex-col w-[50%]">
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-900 text-black"
                >
                  Confirm Password *
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="border border-richblack-400 text-richblack-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-4 bg-richblack-5 dark:border-gray-600"
                  placeholder="Enter Password"
                  required
                  onChange={handelOnChange}
                />
              </div>
            </div>
            <div className="mt-2"></div>
            <div onClick={handelOnSubmit}>
              <CTAButton active={true}>Create Account</CTAButton>
            </div>
            <p className="text-sm font-light text-black pb-9">
              Already have an an account{" "}
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline text-orange-300"
              >
                Sign In
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
