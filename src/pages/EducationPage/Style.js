import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  boldText: {
    display: "inline",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
  },
  container: {
    marginTop: "3rem",
    padding: "3rem",
  },
}));
