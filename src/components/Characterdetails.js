import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Characterdetails() {
  const { id } = useParams();
  const url = `https://api.disneyapi.dev/characters/${id}`;
  const [char, setChar] = useState();
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
      <p className="charname">{char.name}</p>
      <img className="details-image" src={char.imageUrl} alt="" />
      <div className="details-text">
        <div className="tv">
          <h1>TV Shows:</h1> <br></br>
          {char.tvShows.map((tvShows, index) => {
            return (
              <p className="details" key={index}>
                {tvShows}
              </p>
            );
          })}
        </div>
        );
    }
  }
}

        export default Characterdetails;