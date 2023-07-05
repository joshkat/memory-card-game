import { useEffect, useState } from "react";

import CardsView from "./components/CardsView";
import "./css/App.css";

import { noDuplicatesRandArr } from "./modules/noDuplicates";

function App() {
  const [idArray, setIdArray] = useState(noDuplicatesRandArr(12, 151));
  const [clickedOn, setClickedOn] = useState([]);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    if(clickedOn.length >= highScore){
      setHighScore(clickedOn.length);
    }
  }, [clickedOn, highScore, setHighScore])

  return (
    <>
      <p>Score: {clickedOn.length} <br /> High Score: {highScore}</p>
      <CardsView 
        idArray={idArray} 
        setIdArray={setIdArray} 
        clickedOn={clickedOn} 
        setClickedOn={setClickedOn}
      />
    </>
  );
}

export default App;
