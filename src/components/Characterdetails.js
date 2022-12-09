import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Characterdetails(props) {
  // const allShows = char.data.tvShows.map((show) => <p>{show}</p>);
  // const allFilms = char.data.films.map((film) => <p>{film}</p>);
  // const allGames = char.data.videoGames.map((game) => <p>{game}</p>);

  const { id } = useParams();
  const url = `https://api.disneyapi.dev/characters/${id}`;
  const [char, setChar] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setChar(json);
        console.log(json);
      })
      .catch(console.err);
  }, []);

  return char ? (
    <div className="details-page">
      <p>{char.name}</p>
      <img className="details-image" src={char.imageUrl} alt="" />
      <div className="details-text">
        <div className="tv">
          <h1>TV Shows:</h1> <br></br>
          {char.tvShows.map((tvShows, index) => {
            return <p key={index}>{tvShows}</p>;
          })}
        </div>
        <div className="films">
          <h1>Films:</h1>
          <br></br>
          {char.films.map((film, index) => {
            return <p key={index}>{film}</p>;
          })}
        </div>
        <div className="video-games">
          <h1>Video Games:</h1> <br></br>
          {char.videoGames.map((videoGames, index) => {
            return <p key={index}>{videoGames}</p>;
          })}
        </div>
      </div>
    </div>
  ) : (
    <p>LOADING...</p>
  );
}

export default Characterdetails;
