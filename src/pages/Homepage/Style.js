import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  Landingpage: {
    width: "28vw",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  jumbotron: {
    position: "absolute",
    transform: "scale(80%)",
    zIndex: -1,
    top: 755,
    left: -40,
    [theme.breakpoints.down("ll")]: {
      top: 885,
    },
    [theme.breakpoints.down("lg")]: {
      display: "none",
    },
  },
  boldText: {
    display: "inline",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
  question: {
    display: "inline",
    color: theme.palette.text.primary,
  },
  whiteText: {
    display: "inline",
    color: "#fff",
    [theme.breakpoints.down("lg")]: {
      color: theme.palette.text.primary,
    },
  },
}));
