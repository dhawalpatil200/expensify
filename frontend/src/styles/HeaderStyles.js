import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#111",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& > *": {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },

  rightbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    marginLeft: theme.spacing(3),
    fontWeight: "none",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  avatar: {
    backgroundColor: "#777",
  },
  button: {
    backgroundColor: "#0277bd",
    "&:hover": {
      backgroundColor: "#4fc3f7",
    },
  },
  name: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default useStyle;
