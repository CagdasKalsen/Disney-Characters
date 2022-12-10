import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

function Characters(props) {
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
            <div key={index} className="card">
              <Link id="name" to={`/characters/${char._id}`} key={index}>
                <div className="name">
                  <p className="charname">
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
