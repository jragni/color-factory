import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import ColorFactory from "./ColorFactory";
import Color from "./Color";

function Routes(props) {
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorFactory dogs={colors} />
      </Route>
      <Route exact path="/colors/:color">
        <Color />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
