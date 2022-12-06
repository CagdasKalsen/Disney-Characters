import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Character(props) {
  const characterId = useParams();
  const url = `${characterId.id}`;
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setCharacter(json);
      })
      .catch(console.error);
  }, []);

  if (!character) {
    return <p>Loading...</p>;
  }

  return (
    <div className="details-container">
      <img src={character.image} alt={character.name} />
      <div className="details">
        <h2>{character.name}</h2>
      </div>
    </div>
  );
}
export default Character;
