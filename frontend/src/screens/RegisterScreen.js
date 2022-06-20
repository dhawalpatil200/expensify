import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  TextField,
  Typography,
} from "@material-ui/core";
import { LockOutlined } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../actions/userAction";
import useStyle from "../styles/RegisterStyle";

const RegisterScreen = ({ history, location }) => {
  const classes = useStyle();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push("/login");
    }
  }, [userInfo, history]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return;
    }

    dispatch(register(name, email, password));
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      {loading && <LinearProgress />}
      <Box className={classes.outerBox}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate className={classes.innerBox}>
          <Grid container>
            <Grid item xs={12} className={classes.grid}>
              <TextField
                autoComplete="given-name"
                name="Name"
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                variant="outlined"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} className={classes.grid}>
              <TextField
                required
                fullWidth
                name="confirm password"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                autoComplete="current-password"
                variant="outlined"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            className={classes.button}
            type="submit"
            fullWidth
            variant="contained"
            onClick={submitHandler}
          >
            Sign up
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to={"/login"} variant="body2" className={classes.link}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Typography
        variant="body2"
        color="textSecondary"
        align="center"
        className={classes.copyright}
      >
        {"Copyright© "}
        Dhawal Patil
      </Typography>
    </Container>
  );
};

export default RegisterScreen;
