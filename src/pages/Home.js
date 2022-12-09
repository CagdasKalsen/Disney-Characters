import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Characters from "../components/Characters";

function Home() {
  return (
    <div className="home-page">
      <img
        className="bg"
        src="https://featuredanimation.com/wp-content/uploads/2022/10/Popular-Disney-Characters.jpg"
        alt=""
      />
      <h1>Thank you for visiting our page !!</h1>
      <h1>
        Navigate to Characters tab to find out more information on your favorite
        Disney star
      </h1>
      <h1>About Us has information on the creators of this App</h1>
    </div>
  );
}

export default Home;