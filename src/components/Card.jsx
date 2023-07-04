import PropType from "prop-types";
import "../css/Card.css";
import { useEffect, useState } from "react";

export default function Card({ id, handler }) {
  const [name, setName] = useState("");
  const [src, setSrc] = useState("");

  useEffect(() => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setSrc(json.sprites.front_default);
        setName(json.name);
      })
      .catch((error) => console.error(error));
  }, [id]);

  function onClick(e) {
    e.preventDefault();
    handler(id);
  }

  return (
    <>
      <div className="card-root" onClick={onClick}>
        <h3 className="card-title">{name}</h3>
        <img className="card-img" src={src} alt={name} />
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropType.number.isRequired,
  handler: PropType.func.isRequired,
};
