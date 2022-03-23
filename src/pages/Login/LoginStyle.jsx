import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  jumbotron: {
    width: "28vw",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hrStyle: {
    border: "2px solid white",
    backgroundColor: "#fff"
  }
}));
