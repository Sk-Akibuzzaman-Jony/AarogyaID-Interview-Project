import React, { useState } from "react";
import OtpInput from "react-otp-input";
import CTAButton from "../components/common/CTAButton";
import { Link, useNavigate } from "react-router-dom";
import { IoCaretBackSharp } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { signup } from "../services/operations/authApi";

const VerifyOTP = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const handelOnSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(otp, dispatch, navigate));
    }
    return (
        <div className="self-center m-auto p-4">
            <h1 className="text-black font-semibold text-4xl pb-7">Verify Email</h1>
            <p className="text-richblack-500 pb-8 w-[363px]">A verification code has been sent to your email. Enter the code below</p>
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span style={{ width: "8px" }}></span>}
                renderInput={(props) => <input {...props} />}
                isInputNum={true}
                inputStyle={{
                    border: "1px solid transparent",
                    borderRadius: "5px",
                    width: "54px",
                    height: "54px",
                    fontSize: "20px",
                    color: "#2C333F",
                    fontWeight: "400",
                    caretColor: "black",
                    backgroundColor: "#C5C7D4",
                }}
                focusStyle={{
                    border: "1px solid #FFD60A",
                    borderRadius: "5px",
                }}
            />
            <div className="h-7"></div>
            <button onClick={handelOnSubmit}><CTAButton active={true} linkto={''}>Verify and Register</CTAButton></button>
            <div className="h-7"></div>
            <div className="flex justify-between">
                <Link to={"/login"} className="text-richblack-500 flex items-center"><IoCaretBackSharp />
                    Back To Login</Link>
                <button className="text-blue-100 flex items-center"><FaClockRotateLeft /> <span className="w-1"></span>
                    Resend It</button>
            </div>

        </div>
    );
};

export default VerifyOTP;
