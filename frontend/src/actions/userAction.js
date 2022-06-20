import axios from "axios";
import { DISPLAY_SNACKBAR } from "../constants/snackbarConstants";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: {
        title: "Login success",
        severity: "success",
      },
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: {
        title:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        severity: "error",
      },
    });
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/users",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data,
    });

    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: {
        title: "User Created",
        severity: "success",
      },
    });
    // dispatch({
    //   type: USER_LOGIN_SUCCESS,
    //   payload: data,
    // });
    // localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });

    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: {
        title:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        severity: "error",
      },
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  localStorage.removeItem("transactions");
  dispatch({
    type: USER_LOGOUT,
  });
  dispatch({
    type: DISPLAY_SNACKBAR,
    payload: {
      title: "Logout success",
      severity: "success",
    },
  });
};
