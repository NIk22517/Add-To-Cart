import "./App.css";
import Products from "./components/Products";
import { StateContext } from "./lib/context";

function App() {
  return (
    <StateContext>
      <Products />
    </StateContext>
  );
}

export default App;
