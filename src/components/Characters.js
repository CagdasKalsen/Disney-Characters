import { useState, useEffect } from "react";

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
      {character &&
        character.map((char) => {
          return (
            <div className="card">
              <p>Name : {char.name}</p>
              <p>Tv Shows : {char.tvShows}</p>
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

//   (
//     <div className="details-container">
//       <img src={character.image} alt={character.name} />
//       <div className="details">
//         <h2>Hello</h2>
//       </div>
//       <h1>Char</h1>
//     </div>
//   );

//   const characterId = useParams();
//   const url = `${characterId.id}`;
//   const [character, setCharacter] = useState(null);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((json) => {
//         setCharacter(json);
//       })
//       .catch(console.error);
//   }, []);

//   if (!character) {
//     return <p>Loading...</p>;
//   }
