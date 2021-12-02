import * as TICKET from '../constants/ticketConstant';

const initialState = {
  ticket: [],
  error: '',
  success: '',
  loading: false,
  token: null,
  redirect_url: null,
  totalPage: 0,
};

export default function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case TICKET.ADD_TICKET_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.ADD_TICKET_SUCCESS:
      state = {
        ...state,
        loading: false,
        success: '',
        error: '',
      };
      break;
    case TICKET.ADD_TICKET_FAIL:
      state = {
        ...state,
        loading: false,
        success: '',
        error: action.payload.error,
      };
      break;
    case TICKET.GET_TICKET_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.GET_TICKET_SUCCESS:
      state = {
        ...state,
        loading: false,
        ticket: action.payload.ticket,
        totalPage: action.payload.totalPage,
      };
      break;
    case TICKET.GET_TICKET_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case TICKET.DELETE_TICKET_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.DELETE_TICKET_SUCCESS:
      state = {
        ...state,
        loading: false,
        ticket: state.ticket.filter(({ _id }) => _id !== action.payload.id),
      };
      break;
    case TICKET.DELETE_TICKET_FAIL:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      break;
    case TICKET.GET_PAYMENT_INIT:
      state = {
        ...state,
        loading: true,
      };
      break;
    case TICKET.GET_PAYMENT_SUCCESS:
      state = {
        ...state,
        loading: false,
        token: action.payload.token,
        redirect_url: action.payload.redirect_url,
      };
      break;
    case TICKET.GET_PAYMENT_FAIL:
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
