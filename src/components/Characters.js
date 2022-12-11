import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Characters() {
  const [character, setCharacter] = useState(null);
  async function fetchCharacter() {
    try {
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      const characterData = await response.json();
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
      {character &&
        character.map((char, index) => {
          return (
            <div className="card">
              <Link id="name" to={`/characters/${char._id}`} key={index}>
                <div className="name">
                  <p className="charactername">
                    Character <br /> {char.name}
                  </p>
                </div>
                <div className="image">
                  <img src={char.imageUrl} alt="image" />
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
}
export default Characters;