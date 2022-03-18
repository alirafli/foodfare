import { firebaseApp } from "./firebase/init"
import { RouterConfig } from "./navigation/RouterConfig";
import { Provider } from "react-redux";

function App() {
  return (
      <RouterConfig />
  );
}

export default App;
