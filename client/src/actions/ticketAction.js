import * as TICKET from "../constants/ticketConstant";
import Axios from "../helpers/axios";

export const addTicket = (ticket, history, toast) => async (dispatch) => {
  dispatch({ type: TICKET.ADD_TICKET_INIT });
  try {
    await Axios.post("/tiket", ticket);
    dispatch({ type: TICKET.ADD_TICKET_SUCCESS });
    toast.success("Berhasil Membeli Tiket", {
      theme: "dark",
    });
    history.push("/profil");
  } catch (error) {
    toast.success("Gagal Membeli Tiket", {
      theme: "dark",
    });
    dispatch({
      type: TICKET.ADD_TICKET_FAIL,
      payload: { error: error.message },
    });
  }
};

export const getTicket = () => async (dispatch) => {
  dispatch({ type: TICKET.GET_TICKET_INIT });
  try {
    const { data } = await Axios.get("/tiket");
    console.log(data);
    dispatch({
      type: TICKET.GET_TICKET_SUCCESS,
      payload: { ticket: data.items, totalPage: data.totalPage },
    });
  } catch (error) {
    dispatch({
      type: TICKET.GET_TICKET_FAIL,
      payload: { error: error.message },
    });
  }
};

export const getPayment = () => async (dispatch) => {
  dispatch({ type: TICKET.GET_PAYMENT_INIT });
  try {
    const { data } = await Axios.post("/api/payment");
    dispatch({
      type: TICKET.GET_PAYMENT_SUCCESS,
      payload: {
        token: data.result.token,
        redirect_url: data.result.redirect_url,
      },
    });
  } catch (error) {
    dispatch({
      type: TICKET.GET_PAYMENT_FAIL,
      payload: { error: error.message },
    });
  }
};

export const deleteTicket = (id) => async (dispatch) => {
  dispatch({ type: TICKET.DELETE_TICKET_INIT });
  try {
    const { data } = await Axios.delete(`/api/TICKET/${id}`);
    console.log(data);
    dispatch({ type: TICKET.DELETE_TICKET_SUCCESS, payload: { id } });
  } catch (error) {
    dispatch({
      type: TICKET.DELETE_TICKET_FAIL,
      payload: { error: error.message },
    });
  }
};
