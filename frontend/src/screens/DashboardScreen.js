import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Main from "../components/Main";
import useStyle from "../styles/DashboardStyles";
import Details from "../components/Details";

const DashboardScreen = ({ history }) => {
  const classes = useStyle();
  const { userInfo } = useSelector((state) => state.userLogin);
  useEffect(() => {
    if (!userInfo) history.push("/login");
  }, [userInfo, history]);
  return (
    <div>
      <Grid
        container
        spacing={0}
        alignItems="center"
        justifyContent="center"
        className={classes.grid}
      >
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Details title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Details title="Expense" />
        </Grid>
      </Grid>
    </div>
  );
};

export default DashboardScreen;
