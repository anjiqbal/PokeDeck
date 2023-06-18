import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/index";
import { Header } from "../../components/Header";
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

      setPokemon(data.data);
      setIsLoading(false); // set loading state to false once data is loaded
    }
    fetchPokemon();
  }, [pokemonName]);

  return (
    <div className="card-collection">
      <header>
        <Header />
      </header>
      {isLoading ? (
        <h2>Loading...</h2> // render loading message while data is being fetched
      ) : (
        <>
          <h2>PokeDeck</h2>
          <ul className="card-collection__cards">
            {Array.isArray(pokemon) &&
              pokemon.map((card) => (
                <Card
                  srcSmall={card.images.small}
                  srcLarge={card.images.large}
                  name={card.name}
                  alt={card.name}
                  key={card.id}
                  supertype={card.supertype}
                  subtypes={card.subtypes}
                  hp={card.hp}
                  types={card.types}
                  setName={card.set.name}
                  artist={card.artist}
                  rarity={card.rarity}
                />
              ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CardCollection;
