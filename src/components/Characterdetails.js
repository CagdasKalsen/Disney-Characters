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
      <img src={char.imageUrl} alt="" />
      <h2>{char.tvShows}</h2>
      <h2>{char.allies}</h2>
      <h2>{char.enemies}</h2>
      <h2>{char.films}</h2>
      <h2>{char.shortFilms}</h2>
      <h2>{char.videoGames}</h2>
    </div>
  ) : (
    <p>LOADING...</p>
  );
}
export default Characterdetails;
