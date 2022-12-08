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

  if (!char) {
    return <p>Loading...</p>;
  }

  return char ? (
    <div className="card">
      <div className="name">
        <p>
          Character <br /> {char.name}
        </p>
      </div>
      <div className="image">
        <img src={char.imageUrl} alt="" />
      </div>
    </div>
  ) : (
    <p>LOADING...</p>
  );
}

export default Characterdetails;
