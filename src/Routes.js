import React, { useState } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Color from "./Color";
import ColorForm from "./ColorForm";

function Routes({ colors = ["red", "blue", "orange", "green"] }) {
  const [colorsList, setColorsList] = useState(colors);
  function add(color) {
    setColorsList((c) => [...c, color]);
  }
  return (
    <BrowserRouter className="Routes">
      <Switch>
        <Route exact path="/colors">
          <Home colors={colorsList} add={add} />
        </Route>
        <Route exact path="/colors/new">
          <ColorForm add={add} />
        </Route>
        <Route exact path="/colors/:color">
          <Color />
        </Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
