import React from "react";
import { Link } from "react-router-dom";
import ColorForm from "./ColorForm";

function Nav({ colors, addColor }) {
  return (
    <div>
      <ColorForm colors={colors} addColor={addColor} />
      <ul className="Nav">
        {colors.map((color) => (
          <li>
            <Link to={`/colors/${color}`}> {color} </Link>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Nav;
