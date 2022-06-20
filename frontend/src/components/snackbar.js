import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import useStyles from "../styles/snackbarStyles";
import { closeSnackbar } from "../actions/snackbarActions";

const CustomizedSnackbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open, title, severity } = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    dispatch(closeSnackbar());
  };
  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity={severity}
          elavation={6}
          variant="filled"
          color="success"
        >
          {title}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
