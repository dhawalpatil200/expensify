import { useSelector, useDispatch } from "react-redux";
import { AppBar, Avatar, Toolbar, Typography, Button } from "@material-ui/core";
import useStyle from "../styles/HeaderStyles";
import { logout } from "../actions/userAction";
const Header = () => {
  const dispatch = useDispatch();
  const classes = useStyle();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <div>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftbar}>
            <Avatar className={classes.avatar}>
              {userInfo ? userInfo.name[0] : "$"}
            </Avatar>
            {userInfo && (
              <Typography variant="h6" className={classes.name}>
                {userInfo.name.split(" ")[0]}
              </Typography>
            )}
          </div>
          <div className={classes.center}>
            <Typography variant="h4" className={classes.title}>
              Expensify
            </Typography>
          </div>
          {userInfo ? (
            <div className={classes.rightbar}>
              <Button
                className={classes.button}
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => dispatch(logout())}
              >
                Logout
              </Button>
            </div>
          ) : (
            <Typography variant="h5">Please login/register</Typography>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
