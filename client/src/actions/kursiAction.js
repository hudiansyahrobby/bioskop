import * as KURSI from "../constants/kursiConstant";
import Axios from "../helpers/axios";

export const getKursiByJadwal = (jadwalId) => async (dispatch) => {
  dispatch({ type: KURSI.GET_KURSI_INIT });
  try {
    const { data } = await Axios.get(`/jadwal/${jadwalId}/kursi`);
    console.log(data);
    dispatch({
      type: KURSI.GET_KURSI_SUCCESS,
      payload: { kursi: data },
    });
  } catch (error) {
    dispatch({ type: KURSI.GET_KURSI_FAIL, payload: { error: error.message } });
  }
};
