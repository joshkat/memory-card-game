import { useState } from "react";

import CardsView from "./components/CardsView";
import "./css/App.css";

import { noDuplicatesRandArr } from "./modules/noDuplicates";

function App() {
  const [idArray, setIdArray] = useState(noDuplicatesRandArr(12, 151));

  return (
    <>
      <CardsView idArray={idArray} setIdArray={setIdArray}/>
    </>
  );
}

export default App;
