import axios from "axios";
import {
  TRANSACTION_CREATE_FAIL,
  TRANSACTION_CREATE_REQUEST,
  TRANSACTION_CREATE_SUCCESS,
  TRANSACTION_DELETE_FAIL,
  TRANSACTION_DELETE_REQUEST,
  TRANSACTION_DELETE_SUCCESS,
} from "../constants/transactionConstant";
import {
  TRANSACTION_LIST_FAIL,
  TRANSACTION_LIST_REQUEST,
  TRANSACTION_LIST_SUCCESS,
  ADD_TO_TRANSACTION_LIST,
  DELETE_FROM_TRANSACTION_LIST,
} from "../constants/transactionListConstants";
import { DISPLAY_SNACKBAR } from "../constants/snackbarConstants";
export const createTransaction =
  (transaction) => async (dispatch, getState) => {
    try {
      dispatch({ type: TRANSACTION_CREATE_REQUEST });
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `/api/transactions`,
        transaction,
        config
      );
      dispatch({
        type: TRANSACTION_CREATE_SUCCESS,
      });

      dispatch({
        type: ADD_TO_TRANSACTION_LIST,
        payload: data,
      });
      localStorage.setItem(
        "transactions",
        JSON.stringify(getState().transactionList.transactions)
      );
      dispatch({
        type: DISPLAY_SNACKBAR,
        payload: {
          title: "Transaction Successfull",
          severity: "success",
        },
      });
    } catch (error) {
      dispatch({
        type: DISPLAY_SNACKBAR,
        payload: {
          title: "Transaction Failed",
          severity: "error",
        },
      });
      dispatch({
        type: TRANSACTION_CREATE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const deleteTransaction = (_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: TRANSACTION_DELETE_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/transactions/${_id}`, config);

    dispatch({ type: TRANSACTION_DELETE_SUCCESS });
    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: {
        title: "Transaction Successfull",
        severity: "success",
      },
    });
    dispatch({ type: DELETE_FROM_TRANSACTION_LIST, payload: _id });
    localStorage.setItem(
      "transactions",
      JSON.stringify(getState().transactionList.transactions)
    );
  } catch (error) {
    dispatch({
      type: DISPLAY_SNACKBAR,
      payload: {
        title: "Transaction Failed",
        severity: "error",
      },
    });
    dispatch({
      type: TRANSACTION_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getTransactionList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: TRANSACTION_LIST_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/transactions`, config);
    dispatch({
      type: TRANSACTION_LIST_SUCCESS,
      payload: data.data.transactions,
    });
    localStorage.setItem(
      "transactions",
      JSON.stringify(data.data.transactions)
    );
  } catch (error) {
    dispatch({
      type: TRANSACTION_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
