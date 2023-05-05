import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/index";

function CardCollection() {
  const location = useLocation();
  const pokemonName = location.state;
  const [pokemon, setPokemon] = useState([]);
  console.log(pokemonName);
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
      <h1>Hello</h1>
      {Array.isArray(pokemon) &&
        pokemon.map((card) => (
          <Card src={card.images.small} alt={card.name} key={card.id} />
        ))}
    </div>
  );
}

export default CardCollection;
