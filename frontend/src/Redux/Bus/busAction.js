
import axios from "axios";
import {
    BUS_REQUEST,
    BUS_FAILURE,
    BUS_SUCCESS,

  } from "./busActionType";


  const busRequest = () => {
    return {
      type: BUS_REQUEST,
    };
  };
  const busSuccess = (payload) => {
    return {
      type: BUS_SUCCESS,
      payload: payload,
    };
  };
  const busFailure = () => {
    return {
      type: BUS_FAILURE,
    };
  };




  export const getBusesData=(payload)=>(dispatch)=>{
      dispatch(busRequest())

      //__________________________________________________________________Change this link to original API _____________________//
      return axios.get("https://hcbws.sse.codesandbox.io/posts",payload).then(res=>{
          dispatch(busSuccess(res.data))
      })
      .catch(err=>{
          dispatch(busFailure())
      })
  }
  