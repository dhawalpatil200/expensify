import { CssBaseline, makeStyles } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import CustomizedSnackbar from "./components/snackbar";

const useStyle = makeStyles((theme) => ({
  main: {
    paddingTop: theme.spacing(9),
  },
}));
const App = () => {
  const classes = useStyle();

  return (
    <BrowserRouter>
      <CssBaseline />
      <Header />
      <CustomizedSnackbar />
      <main className={classes.main}>
        <Redirect from="/" to="/login" />
        <Route path="/login" component={LoginScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/dashboard" component={DashboardScreen} />
      </main>
    </BrowserRouter>
  );
};

export default App;
