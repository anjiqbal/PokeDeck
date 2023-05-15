import React, { useState } from "react";
import "./App.css";
import Header from "../Header";
import Footer from "../Footer";
import Input from "../Input";
import FeatureCard from "../Feature-card";

function App() {
  const [pokemonName, setPokemonName] = useState("");

  function getPokemonName(input) {
    setPokemonName(input);
    console.log(pokemonName);
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Input getPokemonName={getPokemonName} pokemonName={pokemonName} />
        <FeatureCard />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
