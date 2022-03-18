import { firebaseApp } from "./firebase/init"
import { RouterConfig } from "./navigation/RouterConfig";
import { Provider } from "react-redux";
import { querySnapshot } from "./firebase/api/shareFood";

function App() {
  return (
      <RouterConfig />
  );
}

export default App;
