import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Input from "../Input";
import FeatureCard from "../Feature-card";
import axios from 'axios'

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function getPokemonName(input) {
    setPokemonName(input);
    console.log(pokemonName);
  }

  function togglePopup() {
    setIsOpen(!isOpen);
    console.log("i am here");
  }
  const hitBackend = () => {
    axios.get('/api/test')
    .then((response) => {
    console.log(response.data)
    })
    }

  return (
    <main className="App">
      <Header />
      <button onClick={hitBackend}>Send request</button>
      <section>
        <Input getPokemonName={getPokemonName} pokemonName={pokemonName} />
        <FeatureCard togglePopup={togglePopup} isOpen={isOpen} />
      </section>
    </main>
  );
}

export default App;
