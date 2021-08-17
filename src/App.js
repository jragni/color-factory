import "./App.css";
import ColorFactory from "./ColorFactory";
import { BrowserRouter } from "react-router-dom";

/**App
 *
 * Props:
 *  - colors
 *
 * App -> ColorFactory
 */
function App({ colors }) {
  return (
    <div className="App">
      <BrowserRouter>
        <ColorFactory colors={colors} />
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  colors: ["red", "green", "blue"],
};

export default App;
