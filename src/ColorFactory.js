import React, { useState } from "react";
import Routes from "./Routes";
import Nav from "./Nav";
import ColorForm from "./ColorForm";

function ColorFactory({ colors }) {
  const [colorList, setColorList] = useState(colors);

  function addColor(color) {
    setColorList(c => [...c, color]);
  }
  
  return (
  <div className="ColorFactory">
    <Nav colors={colors} addColor={addColor} />
    <Routes colors={colors}/>
  </div>
  );
}

export default ColorFactory;
