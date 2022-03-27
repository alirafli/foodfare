import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

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
    h3: {
      fontSize: 18,
      color: "#595959",
    },
    h4: {
      fontSize: 12,
      color: "#90A955",
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#90A955",
      contrastText: '#ffffff',
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
    text: {
      primary: "#595959",
      secondary: "#90A955",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      ll: 1441,
    },
  },
});

THEME.typography.title = {
  fontFamily: "Inter, Arial",
  fontSize: 64,
  fontWeight: "bold",
  color: "#595959",
  [THEME.breakpoints.down("md")]: {
    fontSize: 44,
  },
};
