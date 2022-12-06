import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home(props) {

  const [game, setGame] = useState(null);

  async function fetchId() {
    try {
      const response = await fetch(`https://api.rawg.io/api/games?key=${process.env.REACT_APP_MY_KEY}`);
      const gameData = await response.json();
      console.log(gameData);
      setGame(gameData);
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
          <h1 className="callofduty">Call Of Duty</h1>
        </Link>
        <Link>
          <h1 className="assains">Assasins Creed</h1>
        </Link>
      </div>
    </div>
  );
  }

export default Home;
