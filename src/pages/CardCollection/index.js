import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/index";
import "./CardCollection.css";

function CardCollection() {
  const location = useLocation();
  const pokemonName = location.state;
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      const res = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=name:${pokemonName}`
      );
      const data = await res.json();
      console.log(data)
      setPokemon(data.data);
      setIsLoading(false); // set loading state to false once data is loaded
    }
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="card-collection">
      {isLoading ? (
        <h1>Loading...</h1> // render loading message while data is being fetched
      ) : (
        <>
          <h1>PokeDeck</h1>
          <div className="card-collection__cards">
            {Array.isArray(pokemon) &&
              pokemon.map((card) => (
                <Card src={card.images.small} alt={card.name} key={card.id} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}

export default CardCollection;
