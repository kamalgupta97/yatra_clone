
import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
  } from "./authActionType";


  const loginRequest = () => {
    return {
      type: LOGIN_REQUEST,
    };
  };
  const loginSuccess = (payload) => {
    return {
      type: LOGIN_SUCCESS,
      payload: payload,
    };
  };
  const loginFailure = () => {
    return {
      type: LOGIN_FAILURE,
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



  export const getLogin=()=>{
      loginSuccess()
  }
  