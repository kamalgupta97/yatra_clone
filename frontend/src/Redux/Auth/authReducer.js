import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    SEND_OTP_SUCCESS,
    SEND_OTP_FAILURE,
    SEND_OTP_REQUEST,
    OTP_VERIFICATION_SUCCESS,

    OTP_VERIFICATION_REQUEST,
    OTP_VERIFICATION_FAILURE,
  } from "./authActionType";

  const init={
      isAuth: false,
      user: "kamal",
      status:false,
      isLoading:false,
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
          payload,
         
       
     
        };
        case OTP_VERIFICATION_FAILURE:
          return {
            ...state,
            payload,
            isLoading:false,
          
          };
        case OTP_VERIFICATION_SUCCESS:
        
          return {
            ...state,
            isAuth:payload.valid,
            status:payload.status,
            isLoading:false,

          };
        case OTP_VERIFICATION_REQUEST:{
            return{
                ...state,
                isLoading:true,
            }
  
        }
      case SEND_OTP_FAILURE:
        return {
          ...state,
          isLoading:false,
        
        };
      case SEND_OTP_SUCCESS:
      alert("Sent Otp ")
        return {
          ...state,
         status:payload.status,
         isLoading:false,
        };
      case SEND_OTP_REQUEST:{
          return{
              ...state,
              isLoading:true
          }

      }
  
      default:
        return state;
    }
  };