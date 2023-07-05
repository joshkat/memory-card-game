import { useEffect, useState } from "react";

import Header from "./components/Header";
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
      <Header score={clickedOn.length} highScore={highScore}/>
      <CardsView 
        idArray={idArray} 
        setIdArray={setIdArray} 
        clickedOn={clickedOn} 
        setClickedOn={setClickedOn}
      />
      <footer>2023 Katayev &ensp; <a href="https://github.com/joshkat/memory-card-game"><img src="/github-mark.svg" alt="github_logo" /></a></footer>
    </>
  );
}
export default App;
