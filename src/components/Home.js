import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {
  const [character, setCharacter] = useState(null);

  async function fetchId() {
    try {
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      const characterData = await response.json();
      console.log(characterData);
      setCharacter(characterData);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchId();
  }, []);

  return (
    <div className="container">
      <div className="navbar">
        <Link>
          <h1 className="home">Home</h1>
        </Link>
        <Link>
          <h1 className="Disney">Disney Characters</h1>
        </Link>
      </div>
    </div>
  );
}
