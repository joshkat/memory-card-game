import cryptoRandomString from "crypto-random-string";
import PropType from "prop-types";
import Card from "./Card";
import "../css/CardsView.css";

export default function CardsView({ idArray, setIdArray }) {
  function handleCardClick(id) {
    //select 1-4 pokemon from arr, and the one just picked
    const amount = Math.floor(Math.random() * 4 + 1)
    let selected = [id];
    selected.push(...idArray.slice(0,amount));

    //create new arr with 12-amount new pokemon and push in old pokemon
    let newArr = Array.from({length: 12 - (amount + 1)}, () => Math.floor(Math.random() * 151 + 1));
    newArr.push(...selected);

    //shuffle array one last time so old pokemon arent in same position each time and setIdArr
    newArr = newArr.sort(() => 0.5 - Math.random());
    setIdArray(newArr);
  }

  return (
    <>
      <div className="card-view-root">
        {idArray.map((id) => (
          <Card
            id={id}
            key={cryptoRandomString({length:5})}
            handler={handleCardClick}
          />
        ))}
      </div>
    </>
  );
}

CardsView.propTypes = {
  idArray: PropType.array.isRequired,
  setIdArray: PropType.func.isRequired,
};
