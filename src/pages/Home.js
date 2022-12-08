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
        src="https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2021/11/dpd34092494209.jpg"
        alt=""
      />
    </div>
  );
}

export default Home;
