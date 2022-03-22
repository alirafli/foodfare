import { ThemeProvider } from "@mui/material";
import { RouterConfig } from "./navigation/RouterConfig";
import { THEME } from "./Theme";
import { firebaseApp } from "./firebase/init"
import { RouterConfig } from "./navigation/RouterConfig";
import { Provider } from "react-redux";
import { querySnapshot } from "./firebase/api/shareFood";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <RouterConfig />
    </ThemeProvider>
  );
}

export default App;
