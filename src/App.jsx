import { ThemeProvider } from "@mui/material";
import { RouterConfig } from "./navigation/RouterConfig";
import { THEME } from "./Theme";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <RouterConfig />
    </ThemeProvider>
  );
}

export default App;
