import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav({ colors }) {
  return (
    <div>
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
