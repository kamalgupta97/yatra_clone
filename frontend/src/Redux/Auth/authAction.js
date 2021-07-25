
import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,

    OTP_VERIFICATION_SUCCESS,
    OTP_VERIFICATION_FAILURE,
    OTP_VERIFICATION_REQUEST,
  } from "./authActionType";


  const loginRequest = () => {
    return {
      type: LOGIN_REQUEST,
    };
  };
  export const loginSuccess = (payload) => {
    return {
      type: LOGIN_SUCCESS,
      payload: payload,
    };
  };
  const loginFailure = (payload) => {
    return {
      type: LOGIN_FAILURE,
      payload
    };
  };



  const otpVerificationRequest = () => {
    return {
      type: OTP_VERIFICATION_REQUEST,
    
    };
  };
  const otpVerificationSuccess = (payload) => {
    return {
      type: OTP_VERIFICATION_SUCCESS,
      payload: payload,
    };
  };
  const otpVerificationFailure = (payload) => {
    return {
      type: OTP_VERIFICATION_FAILURE,
      payload
    };
  };


















  const signupRequest = (payload) => {
    return {
      type: SIGNUP_REQUEST,
      payload: payload,
    };
  };
  const signupSuccess = (payload) => {
    return {
      type: SIGNUP_SUCCESS,
      payload: payload,
    };
  };
  const signupFailure = () => {
    return {
      type: SIGNUP_FAILURE,
      payload: "we couldn't create your account. Please try again.",
    };
  };



  export const getLogin=(payload)=>(dispatch)=>{
      dispatch(loginRequest())

      return axios.post("http://localhost:7777/login",{mobile:payload})
      .then(res=>{
        dispatch(loginSuccess(res.data))
      })
      .catch(err=>{
        dispatch(loginFailure(err))
      })
  }
  

  export const verifyOtp =(payload)=>(dispatch)=>{
    dispatch(otpVerificationRequest())
    return axios.post("http://localhost:7777/verify",payload)
    .then(res=>{
      dispatch(otpVerificationSuccess(res.data))
    })
    .catch(err=>{
      dispatch(otpVerificationFailure(err))
    })
  }