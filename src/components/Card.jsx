import PropType from "prop-types";
import Pokemon from "/src/pokemon.json";
import "../css/Card.css";

export default function Card({ id, handler }) {
  function onClick() {
    handler(id);
  }

  return (
    <>
      <div className="card-root" onClick={onClick}>
        <h3 className="card-title">{Pokemon[id]}</h3>
        <img className="card-img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={Pokemon[id]} /> 
      </div>
    </>
  );
}

Card.propTypes = {
  id: PropType.number.isRequired,
  handler: PropType.func.isRequired,
};
