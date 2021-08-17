import React, { useState } from "react";
import Routes from "./Routes";

/** ColorFactory
 *
 * Props:
 * - colors
 *
 * State:
 * - colorList
 *
 * App -> ColorFactory -> Routes
 */

function ColorFactory() {
  return (
    <div className="ColorFactory">
      <Routes />
    </div>
  );
}

export default ColorFactory;
