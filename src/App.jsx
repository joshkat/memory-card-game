import { useEffect, useState } from "react";
import CardsView from "./components/CardsView";
import "./App.css";

function App() {
  const [idArray, setIdArray] = useState([]);
  useEffect(() => {
    //get 12 numbers to use for game
    const tempArray = [];
    for (let i = 0; i < 12; i++) {
      const randomId = Math.floor(Math.random() * 151 + 1);

      //prevents duplicates
      if (tempArray.includes(randomId)) {
        i--;
      } else {
        tempArray.push(randomId);
      }
    }
    setIdArray(tempArray);
  }, []);

  return (
    <>
      <CardsView idArray={idArray} />
    </>
  );
}

export default App;
