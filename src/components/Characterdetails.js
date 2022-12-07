import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
function Characterdetails(props) {
  const charId = useParams();
  const url = `https://api.disneyapi.dev/characters/${charId.id}`;
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

  return <div>hello</div>;
}

export default Characterdetails;
