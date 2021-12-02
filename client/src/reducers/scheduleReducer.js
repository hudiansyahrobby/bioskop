import * as SCHEDULE from "../constants/scheduleConstant";

const initialState = {
  time: [],
  schedules: [],
  scheduleByDate: [],
  scheduleById: [],
  success: "",
  error: "",
  loading: false,
};

export default function scheduleReducer(state = initialState, action) {
  switch (action.type) {
    case SCHEDULE.ADD_TIME_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.ADD_TIME_SUCCESS:
      state = {
        ...state,
        loading: false,
        success: action.payload.success,
        error: "",
        time: state.time.concat(action.payload.time),
      };
      break;
    case SCHEDULE.ADD_TIME_FAIL:
      state = {
        ...state,
        loading: false,
        success: "",
        error: action.payload.error,
      };
      break;
    case SCHEDULE.GET_TIME_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.GET_TIME_SUCCESS:
      state = {
        ...state,
        loading: false,
        time: action.payload.time,
      };
      break;
    case SCHEDULE.GET_TIME_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case SCHEDULE.DELETE_TIME_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.DELETE_TIME_SUCCESS:
      state = {
        ...state,
        loading: false,
        time: state.time.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case SCHEDULE.DELETE_TIME_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;

    case SCHEDULE.ADD_SCHEDULE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.ADD_SCHEDULE_SUCCESS:
      state = {
        ...state,
        loading: false,
        error: "",
      };
      break;
    case SCHEDULE.ADD_SCHEDULE_FAIL:
      state = {
        ...state,
        loading: false,
        success: "",
        error: action.payload.error,
      };
      break;
    case SCHEDULE.GET_ALL_SCHEDULE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.GET_ALL_SCHEDULE_SUCCESS:
      state = {
        ...state,
        loading: false,
        schedules: action.payload.schedules,
      };
      break;
    case SCHEDULE.GET_ALL_SCHEDULE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case SCHEDULE.GET_SCHEDULE_BY_DATE_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.GET_SCHEDULE_BY_DATE_SUCCESS:
      state = {
        ...state,
        loading: false,
        scheduleByDate: action.payload.schedule,
      };
      break;
    case SCHEDULE.GET_SCHEDULE_BY_DATE_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case SCHEDULE.GET_SCHEDULE_BY_ID_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case SCHEDULE.GET_SCHEDULE_BY_ID_SUCCESS:
      state = {
        ...state,
        loading: false,
        scheduleById: action.payload.schedule,
      };
      break;
    case SCHEDULE.GET_SCHEDULE_BY_ID_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case SCHEDULE.RESET_SCHEDULE:
      state = {
        ...state,
        loading: false,
        success: "",
        error: "",
      };
      break;
    default:
      return state;
  }
  return state;
}
