import {
  CLOSE_SNACKBAR,
  DISPLAY_SNACKBAR,
} from "../constants/snackbarConstants";

export const displaySnackbar = (title, severity) => (dispatch) => {
  dispatch({ type: DISPLAY_SNACKBAR, payload: { title, severity } });
};

export const closeSnackbar = () => (dispatch) => {
  dispatch({ type: CLOSE_SNACKBAR });
};
