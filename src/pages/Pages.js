import React from "react";
import Aboutus from "./Aboutus";
import Characters from "../components/Characters";
import Home from "./Home";
import Characterdetails from "../components/Characterdetails";

function Pages() {
  return (
    <div className="link">
      <Home />
      <Aboutus />
      <Characters />
      <Characterdetails />
    </div>
  );
}

export default Pages;