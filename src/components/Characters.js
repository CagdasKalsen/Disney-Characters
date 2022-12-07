import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router";

function Characters() {
  const [character, setCharacter] = useState(null);

  async function fetchCharacter() {
    try {
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      const characterData = await response.json();
      console.log(characterData);
      setCharacter(characterData.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchCharacter();
  }, []);
  return (
    <div className="container">
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
      {character &&
        character.map((char) => {
          return (
            <div className="card">
              <div className="name">
                <p>Name : {char.name}</p>
              </div>
              <div className="image">
                <img src={char.imageUrl} alt="" />
              </div>
            </div>
          );
        })}
    </div>
  );
}
export default Characters;
