import { useState, useEffect } from "react";

function CardCollection({ pokemonName }) {
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
      );
      const data = await res.json();
      setPokemon(data.data);
      console.log(pokemon);
    }
    fetchPokemon();
  }, [pokemon, pokemonName]);

  return (
    <div className="pokemon-viewer">
      {Array.isArray(pokemon) &&
        pokemon.map((card) => (
          <img src={card.images.small} alt={card.name} key={card.id} />
        ))}
    </div>
  );
}

export default CardCollection;

// export default CardCollection;
//src={pokemon.data[55].images.small}
