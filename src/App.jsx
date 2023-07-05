import { useState } from "react";

import CardsView from "./components/CardsView";
import "./css/App.css";

import { noDuplicatesRandArr } from "./modules/noDuplicates";

function App() {
  const [idArray, setIdArray] = useState(noDuplicatesRandArr(12, 151));
  const [clickedOn, setClickedOn] = useState([]);

  return (
    <>
      <p>Score: {clickedOn.length}</p>
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
