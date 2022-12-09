import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Characterdetails(props) {
  // const allShows = char.data.tvShows.map((show) => <p>{show}</p>);
  // const allFilms = char.data.films.map((film) => <p>{film}</p>);
  // const allGames = char.data.videoGames.map((game) => <p>{game}</p>);

  // return (
  //   <div>
  //     <h2>tvShows</h2>
  //     <div>{allShows.length ? allShows : "N/A"} </div>
  //     <h2>films</h2>
  //     <div>{allFilms.length ? allFilms : "N/A"} </div>
  //     <h2>videoGames</h2>
  //     <div>{allGames.length ? allGames : "N/A"} </div>
  //   </div>
  // //   // {char.map((data)=> (
  // //   //   <Detail shows={data.tvShows} films={data.allFilms} games={data.videoGames} />
  // //   // ))}
  // // )

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
        <div className="tv">
          <h1>TV Shows:</h1> <br></br>
          {char.tvShows}
        </div>
        <div className="films">
          <h1>Films:</h1>
          <br></br>
          {char.films}
        </div>
        <div className="video-games">
          <h1>Video Games:</h1> <br></br>
          {char.videoGames}
        </div>
      </div>
    </div>
  ) : (
    <p>LOADING...</p>
  );
}

export default Characterdetails;
