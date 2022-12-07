import { useState, useEffect } from "react"

function Characters() {
  const [character, setCharacter] = useState(null);
  async function fetchId() {
    try {
      const response = await fetch(`https://api.disneyapi.dev/characters`);
      const characterData = await response.json();
      console.log(character);
      setCharacter(characterData.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchId();
  }, []);
  return (
    <div className="container">
      {character.map((char) => {
        return (
          <div className="card">
            <p>Name : {char.name}</p>
            <p>Tv Shows : {char.tvShows}</p>
            <p>{char._id}</p>
            <p>Games : {char.videoGames}</p>
            <p>Fims : {char.films}</p>
            <img src={char.imageUrl} alt="" />
          </div>
        );
      })}
    </div>
  );
}
export default Characters;