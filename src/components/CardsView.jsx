import cryptoRandomString from "crypto-random-string";
import PropType from "prop-types";
import Card from "./Card";
import "../css/CardsView.css";
import { noDuplicatesRandArr, shuffle, replaceDuplicates } from "../modules/noDuplicates";

export default function CardsView({ idArray, setIdArray, clickedOn, setClickedOn }) {
  function handleCardClick(id) {
    //select 6 pokemon from og arr
    let selected = idArray.slice(0,6);
    
    //generate new arr without duplicates 
    let newArr = noDuplicatesRandArr(5, 151);

    //ensure one picked will be in new arr along with selected and shuffle
    newArr = shuffle(replaceDuplicates([...newArr, ...selected, id], 151));
    setIdArray(newArr);

    //add to clickedOn arr when id!=clickedOn[clickedOn.length], when === then resetArr
    if(clickedOn.includes(id)){
      setClickedOn([]);
    }else{
      setClickedOn([...clickedOn, id]);
    }
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
  clickedOn: PropType.array.isRequired,
  setClickedOn: PropType.func.isRequired,
};
