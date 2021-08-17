import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

function Home({ colors, add }) {
  return (
    <div className="Home">
      <h1> Welcome to the Color Factory. </h1>
      <p>
        <Link to="/colors/new">Add A Color</Link>
      </p>
      <Nav colors={colors} add={add} />
    </div>
  );
}

export default Home;
