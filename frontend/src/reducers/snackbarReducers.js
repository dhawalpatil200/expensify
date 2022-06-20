import {
  CLOSE_SNACKBAR,
  DISPLAY_SNACKBAR,
} from "../constants/snackbarConstants";

export const snackbarReducer = (
  state = {
    open: false,
  },
  action
) => {
  switch (action.type) {
    case DISPLAY_SNACKBAR:
      return {
        open: true,
        title: action.payload.title,
        severity: action.payload.severity,
      };
    case CLOSE_SNACKBAR:
      return { ...state, open: false };
    default:
      return state;
  }
};
