import { useState, useEffect } from "react";
import Card from "../Card/index";

function CardCollection({ pokemonName }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
      );
      const data = await res.json();
      setPokemon(data.data);
    }
    fetchPokemon();
  }, [pokemon, pokemonName]);

  return (
    <div className="card-collection">
      {Array.isArray(pokemon) &&
        pokemon.map((card) => (
          <Card src={card.images.small} alt={card.name} key={card.id} />
        ))}
    </div>
  );
}

export default CardCollection;
