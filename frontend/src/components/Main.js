import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyle from "../styles/MainStyles";
import Form from "./Form";
import List from "./List";

const Main = () => {
  const { total } = useSelector((state) => state.transactionList);

  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance : ${total}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{
            lineHeight: "1.5rem",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        ></Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default Main;
