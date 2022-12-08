import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Characters from "../components/Characters";

function Home() {
  return (
    <div>
      <div className="link">
        <Link id="home" to={"/"}>
          Home
        </Link>
        <Link id="char" to={"/characters"}>
          Characters
        </Link>
        <Link id="about" to={"/aboutus"}>
          About Us
        </Link>
      </div>

      <img
        className="bg"
        src="https://media3.giphy.com/media/kolvlRnXh8Jj2/giphy.gif"
        alt=""
      />
    </div>
  );
}

export default Home;
