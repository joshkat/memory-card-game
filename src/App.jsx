import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    fetch_img();
  }, []);

  function fetch_img() {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${
      Math.floor(Math.random() * 151) + 1
    }`;

    fetch(endpoint)
      .then((response) => response.json())
      .then(
        (json) =>
          (document.querySelector("img").src = json.sprites.front_default)
      )
      .catch((error) => console.error(error));
  }
  return (
    <>
      <div>This is from within the App folder!!!!</div>
      <p>
        Here is an image of a random pokemon which was taken from the PokeAPI:
      </p>
      <img src="" alt="poke_img" className="poke_img" />
      <br />
      <button onClick={fetch_img}>Change the Pokemon</button>
    </>
  );
}

export default App;
