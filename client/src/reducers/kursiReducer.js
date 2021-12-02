import * as KURSI from "../constants/kursiConstant";

const initialState = {
  kursi: [],
  success: "",
  error: "",
  loading: false,
};

export default function kursiReducer(state = initialState, action) {
  switch (action.type) {
    case KURSI.GET_KURSI_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case KURSI.GET_KURSI_SUCCESS:
      state = {
        ...state,
        loading: false,
        kursi: action.payload.kursi,
      };
      break;
    case KURSI.GET_KURSI_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    default:
      return state;
  }
  return state;
}
