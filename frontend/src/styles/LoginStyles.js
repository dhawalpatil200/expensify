import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    marginTop: "5rem",
    backgroundColor: "white",
    borderRadius: 10,
    padding: theme.spacing(3),
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  },
  outerBox: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: 1,
  },
  innerBox: {
    marginTop: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  copyright: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  link: {
    color: theme.palette.info.main,
  },
}));

export default useStyle;
