import React, { useState } from "react";
import "./App.css";
import CardCollection from "../../pages/CardCollection";
import Input from "../Input";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  function getPokemonName(input) {
    setPokemonName(input);
    console.log(pokemonName);
  }
  return (
    <div className="App">
      <Input getPokemonName={getPokemonName} pokemonName={pokemonName} />
    </div>
  );
}

export default App;
