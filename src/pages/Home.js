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
        src="https://media.king5.com/assets/KING/images/c2b53d29-9aaa-49cb-b7c4-74035ec6880a/c2b53d29-9aaa-49cb-b7c4-74035ec6880a_750x422.jpg"
        alt=""
      />
    </div>
  );
}

export default Home;
