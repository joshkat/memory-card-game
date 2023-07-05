import PropType from "prop-types";
import Pokemon from "/src/pokemon.json";
import "../css/Card.css";

export default function Card({ id, handler }) {
  const src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  const name = Pokemon[id];
  function onClick() {
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
