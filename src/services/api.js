const BASE_URL = process.env.REACT_APP_BASE_URL

export const auth = {
    LOGIN_API : BASE_URL+"/auth/login",
    SEND_OTP : BASE_URL+"/auth/sendotp",
    SIGNUP_API : BASE_URL+"/auth/signup",
}