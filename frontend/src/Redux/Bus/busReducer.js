import { ContactlessOutlined } from "@material-ui/icons";
import {
  BUS_REQUEST,
  BUS_FAILURE,
  BUS_SUCCESS,
  SAVE_SEARCHDATA,
  SELECTED_SEATS
} from "./busActionType";

const init = {
  isLoading: false,
  isError: false,
  saved_searchdata: {},
  data: {},
  selected_seats_data:{}
};

export const busReducer = (state = init, { type, payload }) => {
  switch (type) {
    case BUS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case BUS_FAILURE:
      return {
        ...state,

        payload,
        isError: true,
        isLoading: false,
      };
    case BUS_SUCCESS:
      console.log(payload);
      return {
        ...state,
        data: payload,
        isLoading: false,
      };
    case SAVE_SEARCHDATA: {
      return {
        ...state,
        saved_searchdata: payload,
      };
    }
    case SELECTED_SEATS:{
      return {
        ...state,
        selected_seats_data:payload
      }
    }

    default:
      return state;
  }
};
