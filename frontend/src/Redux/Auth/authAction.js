
import axios from "axios";
import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SEND_OTP_SUCCESS,
    SEND_OTP_FAILURE,
    SEND_OTP_REQUEST,

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


















  const sendOtpRequest = (payload) => {
    return {
      type: SEND_OTP_REQUEST,
      payload: payload,
    };
  };
  const sendOtpSuccess = (payload) => {
    return {
      type: SEND_OTP_SUCCESS,
      payload: payload,
    };
  };
  const sendOtpFailure = () => {
    return {
      type: SEND_OTP_FAILURE,
      payload: "we couldn't create your account. Please try again.",
    };
  };



  export const sendOtp=(payload)=>(dispatch)=>{
      dispatch(sendOtpRequest())

      return axios.post("http://localhost:7777/login",{mobile:payload})
      .then(res=>{
        dispatch(sendOtpSuccess(res.data))
      })
      .catch(err=>{
        dispatch(sendOtpFailure(err))
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