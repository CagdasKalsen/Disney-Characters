import React from "react";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div>
      <div className="link">
        <Link id="home" to={"/"}>
          Home{" "}
        </Link>{" "}
        <Link id="char" to={"/characters"}>
          Characters{" "}
        </Link>{" "}
        <Link id="about" to={"/aboutus"}>
          About Us{" "}
        </Link>{" "}
      </div>{" "}
      <h1> Cagdas AND Brandon </h1>{" "}
    </div>
  );
}

export default Aboutus;
