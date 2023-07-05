import cryptoRandomString from "crypto-random-string";
import PropType from "prop-types";
import Card from "./Card";
import "../css/CardsView.css";
import { noDuplicatesRandArr, shuffle } from "../modules/noDuplicates";

export default function CardsView({ idArray, setIdArray }) {
  function handleCardClick(id) {
    //select 1-6 pokemon from og arr
    const amount = Math.floor(Math.random() * 6 + 1)
    let selected = [...idArray.slice(0,amount)];
    
    //generate new arr without duplicates 
    let newArr = noDuplicatesRandArr(12, 151);
    newArr = [...new Set([...newArr, ...selected])].slice(0,11);

    //ensure one picked will be in new arr and shuffle
    newArr = shuffle([...newArr, id]);
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
