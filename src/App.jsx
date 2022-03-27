import { ThemeProvider } from "@mui/material";
import { RouterConfig } from "./navigation/RouterConfig";
import { THEME } from "./Theme";
import { firebaseApp } from "./firebase/init"
import { Provider } from "react-redux";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <SnackbarProvider maxSnack={3}>
        <RouterConfig />
    </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
