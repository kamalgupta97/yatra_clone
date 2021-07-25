import {
    BUS_REQUEST,
    BUS_FAILURE,
    BUS_SUCCESS,
    SAVE_SEARCHDATA
    
  } from "./busActionType";

  const init={
    saved_searchdata:{}
    
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
        case SAVE_SEARCHDATA:{
          return {
            ...state,
            saved_searchdata:payload
          }
        }
     
      default:
        return state;
    }
  };