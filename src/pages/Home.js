import React from "react";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Characters from "../components/Characters";

function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <h1> Hello </h1>
      </div>
      <Characters />
    </div>
  );
}

export default Home;
