import { apiConnector } from '../apiConnector';
import { auth } from '../api';
import { setUser } from '../../slices/profileSlice';
import { setToken } from '../../slices/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function login(email, password, navigate, dispatch) {
  return async () => {
    const loggingIn = toast.loading('Logging In', {
      toastId: "123",
      position: "top-center",
      hideProgressBar: true,
      autoClose: 5000,
    });
    try {
      const bodyData = {
        email: email,
        password: password
      };
      const response = await apiConnector("POST", auth.LOGIN_API, bodyData);
      if (response.data.success === true) {
        const { token, user } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(setUser(user));
        dispatch(setToken(token));
        navigate("/");
        toast.dismiss(loggingIn);
        toast.success('Logged In', {
          toastId: "456",
          position: "top-center",
          hideProgressBar: true,
          autoClose: 1000,
        })
      }
    } catch (error) {
      let errorMessage = "Login Failed, please try again later";
        if (error.request.status === 400) {
          errorMessage = "All fields are required, please try again";
        } else if (error.request.status === 401) {
          errorMessage = "Password Incorrect";
        } else if (error.request.status === 403) {
          errorMessage = "User is not registered with us, please signup first";
        }
        toast.error(errorMessage, {
          toastId: "789",
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
    } finally {
      toast.dismiss(loggingIn);
    }
  }
}

export function sendOTP(firstName, lastName, email, password, confirmPassword, currentUserType, healthcareProfessionalType, healthcareSubcategory, governmentID, dob, address, pin, district, state, healthcareProfessionalID, phoneNumber, dispatch, navigate) {
  return async () => {
    const loggingIn = toast.loading('Loading', {
      toastId: "123",
      position: "top-center",
      hideProgressBar: true,
      autoClose: false,
    });
    try {
      if(!firstName || !lastName || !email || !password || !confirmPassword || !phoneNumber || !governmentID || !dob || !address || !pin || !district || !state){
        toast.error("All The Fields are required to be filled", {
          toastId: "789",
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
      //make a json of the details and store them in the session storage 
      const tempUser = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        accountType: currentUserType,
        healthcareProfessionalType: healthcareProfessionalType,
        healthcareSubcategory : healthcareSubcategory,
        governmentID: governmentID,
        dob:dob,
        address:address,
        pin:pin,
        district:district,
        state:state,
        healthcareProfessionalID:healthcareProfessionalID,
        phoneNumber:phoneNumber,
        otp: ""
      }
      sessionStorage.setItem("tempUser", JSON.stringify(tempUser));

      //send OTP 
      const response = await apiConnector("POST", auth.SEND_OTP, { email: email });
      if (response.data.success !== true) {
        console.error("OTP Generation failed");
      }
      navigate("/verify-otp");
    } catch (error) {
      let errorMessage = "Sending OTP failed, please try again later";
      if (error.request.status === 401) {
        errorMessage = "User is already signed up";
      } else if(error.request.status === 403){
        errorMessage = "All the fields are required to be filled"
      }
      toast.error(errorMessage, {
        toastId: "789",
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
      });
    } finally {
      toast.dismiss(loggingIn);
    }
  }
}


export function signup(otp, dispatch, navigate) {
  //console.log(otp);
  const loggingIn = toast.loading('Loading', {
    toastId: "123",
    position: "top-center",
    hideProgressBar: true,
    autoClose: false,
  });
  return async () => {
    try {
      //get tempUser date from session storage
      const tempUser = JSON.parse(sessionStorage.getItem("tempUser"));
      tempUser.otp = otp;
      console.log(tempUser);
      const response = await apiConnector("POST", auth.SIGNUP_API, tempUser);
      sessionStorage.clear();
      navigate("/login")
      toast.success('Successfully signed up, please login with the new credentials', {
        toastId: "456",
        position: "top-center",
        hideProgressBar: true,
        autoClose: 2000,
      })
    } catch (error) {
        toast.error(error.request.message, {
          toastId: "789",
          position: "top-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
    } finally {
      toast.dismiss(loggingIn);
    }
  }
}