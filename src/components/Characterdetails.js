import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Characterdetails(props) {
  const { id } = useParams();
  const url = `https://api.disneyapi.dev/characters/${id}`;
  const [char, setChar] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setChar(json);
      })
      .catch(console.err);
  }, []);

  return char ? (
    <div className="details-page">
      <p>{char.name}</p>
        <img className="details-image" src={char.imageUrl} alt="" />
    <div className="details-text">
          <h2 className="tv"><h1>TV Shows:</h1> <br></br>{char.tvShows}</h2>
      <h2 className="films"><h1>Films:</h1><br></br>{char.films}</h2>
      <h2 className="video-games"><h1>Video Games:</h1> <br></br>{char.videoGames}</h2>
    </div>
    </div>
  ) : (
    <p>LOADING...</p>
  );
}
export default Characterdetails;
