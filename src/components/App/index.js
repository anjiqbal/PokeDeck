import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import FeatureCard from "../Feature-card";

function App() {
  const [pokemonName, setPokemonName] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function getPokemonName(input) {
    setPokemonName(input);
    console.log(pokemonName);
  }

  function togglePopup() {
    setIsOpen(!isOpen)
    console.log('i am here')
  }

  return (
    <div className="App">
      <Header />
      <main>
        <Input getPokemonName={getPokemonName} pokemonName={pokemonName} />
        <FeatureCard togglePopup={togglePopup} isOpen={isOpen} />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
