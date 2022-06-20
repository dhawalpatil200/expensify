import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
    backgroundColor: "white",
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    borderRadius: 10,
    padding: theme.spacing(3),
  },
  outerBox: {
    marginTop: 5,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 1,
  },
  innerBox: {
    marginTop: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
  copyright: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  link: {
    color: theme.palette.info.main,
  },
  grid: {
    margin: theme.spacing(1),
  },
}));

export default useStyle;
