import { createTheme } from "@mui/material";
import { red } from '@mui/material/colors';


export const THEME = createTheme({
  typography: {
    fontFamily: "Inter, Arial",
    h1: {
      fontSize: 36,
      fontWeight: "bold",
      color: "#595959",
    },
    h2: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#595959",
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#90A955",
    },
    secondary: {
      main: "#132a13",
    },
    complementary: {
      main: "#f1f8e9",
    },
    error: {
      main: red[900],
    },
  },
});
