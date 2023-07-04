import PropType from "prop-types";
import Card from "./Card";
import "../css/CardsView.css";

export default function CardsView({ idArray }) {
  function handleCardClick(id) {
    console.log(id);
  }

  return (
    <>
      <div className="card-view-root">
        {idArray.map((id) => (
          <Card
            id={id}
            key={id}
            handler={handleCardClick}
            className="grid-item"
          />
        ))}
      </div>
    </>
  );
}

CardsView.propTypes = {
  idArray: PropType.array.isRequired,
};
