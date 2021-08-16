import React from "react";
import { Link } from "react-router-dom";

function Nav({ colors }) {
  return (
    <ul className="Nav">
      {colors.map((color) => (
        <li>
          <Link to={`/colors/${color}`}> {color} </Link>
        </li>
      ))}
    </ul>
  );
}

export default Nav;
