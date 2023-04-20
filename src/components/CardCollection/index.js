import { useState, useEffect } from "react";

function CardCollection() {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(`https://api.pokemontcg.io/v2/cards/`);
      const data = await res.json();
      setPokemon(data);
      console.log(data);
    }
    fetchPokemon();
  }, []);

  return (
    <div className="pokemon-viewer">
      <img src={pokemon.data[55].images.small} alt={"Pokemon Card"} />
    </div>
  );
}

export default CardCollection;
