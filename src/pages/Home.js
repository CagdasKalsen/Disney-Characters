import React from "react";
import Characters from "../components/Characters";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

function Home() {
  // const [character, setCharacter] = useState(null);
  // async function fetchId() {
  //   try {
  //     const response = await fetch(`https://api.disneyapi.dev/characters`);
  //     const characterData = await response.json();
  //     setCharacter(characterData);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // useEffect(() => {
  //   fetchId();
  // }, []);

  return (
    <div className="container">
      <div className="navbar">
        <h1>Hello</h1>
      </div>
      <Characters />
    </div>
  );
}
export default Home;