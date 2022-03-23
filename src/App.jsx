import { ThemeProvider } from "@mui/material";
import { RouterConfig } from "./navigation/RouterConfig";
import { THEME } from "./Theme";
import { firebaseApp } from "./firebase/init"
import { Provider } from "react-redux";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <RouterConfig />
    </ThemeProvider>
  );
}

export default App;
