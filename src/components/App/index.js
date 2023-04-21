import React, { useState } from "react";
import "./App.css";
import CardCollection from "../CardCollection";
import Input from "../Input";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  function getPokemonName(input) {
    setPokemonName(input);
  }

  return (
    <div className="App">
      <Input getPokemonName={getPokemonName} />
      <CardCollection pokemonName={pokemonName} />
    </div>
  );
}

export default App;
