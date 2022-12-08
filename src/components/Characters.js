import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useParams } from "react-router";

function Characters(props) {
  const [character, setCharacter] = useState(null);

  async function fetchCharacter() {
    try {
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      const characterData = await response.json();
      console.log(characterData.data[0]._id);
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
        character.map((char, index) => {
          return (
            <div className="card">
              <Link id="name" to={`/characters/${char._id}`} key={index}>
                <div className="name">
                  <p>
                    Character <br /> {char.name}
                  </p>
                </div>
                <div className="image">
                  <img src={char.imageUrl} alt="" />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
export default Characters;
