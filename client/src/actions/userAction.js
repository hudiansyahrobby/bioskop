import Axios from "../helpers/axios";
import * as USER from "../constants/userConstant";

export const signup = (user, history) => async (dispatch) => {
  dispatch({ type: USER.SIGN_UP_INIT });
  try {
    const { data } = await Axios.post("/auth/register", user);
    dispatch({
      type: USER.SIGN_UP_SUCCESS,
    });
    history.push("/masuk");
  } catch (error) {
    dispatch({ type: USER.SIGN_UP__FAIL, payload: error.message });
  }
};

export const signout = (history) => async (dispatch) => {
  dispatch({ type: USER.SIGN_OUT_INIT });
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: USER.SIGN_OUT_SUCCESS });
    history.push("/masuk");
  } catch (error) {
    dispatch({ type: USER.SIGN_OUT__FAIL, payload: error.message });
  }
};

export const signin = (userData, history) => async (dispatch) => {
  dispatch({ type: USER.SIGN_IN_INIT });
  try {
    const {
      data: { data: user },
    } = await Axios.post("/auth/login", userData);

    localStorage.setItem("token", user.token);
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: USER.SIGN_IN_SUCCESS,
      payload: { token: user.token, user },
    });
    history.push("/profile");
  } catch (error) {
    dispatch({ type: USER.SIGN_IN__FAIL, payload: error.message });
  }
};

export const isUserLoggedIn = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  if (token && user) {
    dispatch({ type: USER.SIGN_IN_SUCCESS, payload: { token, user } });
  } else {
    dispatch({ type: USER.SIGN_IN__FAIL, payload: "Token is not valid" });
  }
};
