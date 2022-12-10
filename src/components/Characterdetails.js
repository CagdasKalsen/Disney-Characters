import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function Characterdetails(props) {

  const { id } = useParams();
  const url = `https://api.disneyapi.dev/characters/${id}`;
  const [char, setChar] = useState();
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setChar(json);
        console.log(json);
      })
      .catch(console.err);
  }, []);


  // const detailsRendered = (char) => {

  //   console.log(char.tvShows);
  //   console.log(char.tvShows.length);
  //   console.log(char.films.length);
  //   console.log(char.videoGames.length);
  // };


  // useEffect(() => {
  //   detailsRendered(char)
  // })

  console.log(char);
  {
    if (char) {
      return (
        <div className="details-page">
          <p>{char.name}</p>
          <img className="details-image" src={char.imageUrl} alt="" />
          <div className="details-text">
            <div className="tv">
            </div>
            <h1>TV Shows</h1>
            {char.tvShows.map((tvShows, index) => {
              return <p key={index}>{tvShows}</p>
            })}
            <h1>Films</h1>
            {char.films.map((films, index) => {
              return <p key={index}>{films}</p>
            })}
            <h1>Video Games</h1>
            {char.videoGames.map((videoGames, index) => {
              return <p key={index}>{videoGames}</p>
            })}
          </div>
        </div>
      );
    }
  }
}

export default Characterdetails;





{/* <div className="films">
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
        </div> */}