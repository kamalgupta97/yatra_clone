import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
  } from "./authActionType";

  const init={
      name:[]
  }

  export const authReducer = (state = init, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST:{
          return{
              ...state
          }

      }
      case LOGIN_FAILURE:
        return {
          ...state,
          name:payload
         
        };
      case LOGIN_SUCCESS:
       
        return {
          ...state,
       
     
        };
      case SIGNUP_FAILURE:
        return {
          ...state,
        
        };
      case SIGNUP_SUCCESS:
      
        return {
          ...state,
        };
      case SIGNUP_REQUEST:{
          return{
              ...state
          }

      }
  
      default:
        return state;
    }
  };