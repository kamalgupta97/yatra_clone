import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    SIGNUP_REQUEST,
    OTP_VERIFICATION_SUCCESS,

    OTP_VERIFICATION_REQUEST,
    OTP_VERIFICATION_FAILURE,
  } from "./authActionType";

  const init={
      
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
          payload
         
        };
      case LOGIN_SUCCESS:
       
        return {
          ...state,
          payload
       
     
        };
        case OTP_VERIFICATION_FAILURE:
          return {
            ...state,
            payload
          
          };
        case OTP_VERIFICATION_SUCCESS:
        
          return {
            ...state,
            payload
          };
        case OTP_VERIFICATION_REQUEST:{
            return{
                ...state
            }
  
        }
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