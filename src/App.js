import "./App.css";
import ColorFactory from "./ColorFactory";
import Routes from "./Routes";
import Nav from "./Nav";

function App({ colors }) {
  return (
    <div className="App">
      <Nav colors={colors} />
      <Routes />
      <ColorFactory />
    </div>
  );
}

App.defaultProps = {
  colors: ["red", "green", "blue"],
};

export default App;
