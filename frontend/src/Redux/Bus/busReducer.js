import {
    BUS_REQUEST,
    BUS_FAILURE,
    BUS_SUCCESS,
    
  } from "./busActionType";

  const init={
    
  }

  export const busReducer = (state = init, { type, payload }) => {
    switch (type) {
      case BUS_REQUEST:{
          return{
              ...state
          }

      }
      case BUS_FAILURE:
        return {
          ...state,
         
        };
      case BUS_SUCCESS:
       
        return {
          ...state,
         payload
       
     
        };
     
      default:
        return state;
    }
  };