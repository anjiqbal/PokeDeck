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
      setPokemon(data.data);
      setIsLoading(false); // set loading state to false once data is loaded
    }
    fetchPokemon();
  }, [pokemonName]);


  // function handleSort(e){
  //   let newOrder = 0
  //     if(e.target.value === "release-date-asc"){
  //       newOrder = pokemon.slice().sort((a,b)=>{
  //        return a.set.releaseDate - b.set.releaseDate
  //       })
  //   }
  //   console.log(newOrder)
  //   console.log(e.target.value)
  // }

  function handleSort(e) {
    let newOrder = [];
  
    if (e.target.value === "release-date-asc") {
      newOrder = pokemon.slice().sort((a, b) => {
        const releaseDateA = new Date(a.set.releaseDate);
        const releaseDateB = new Date(b.set.releaseDate);
        return releaseDateA - releaseDateB;
      });
    } else if (e.target.value === "release-date-desc") {
      newOrder = pokemon.slice().sort((a, b) => {
        const releaseDateA = new Date(a.set.releaseDate);
        const releaseDateB = new Date(b.set.releaseDate);
        return releaseDateB - releaseDateA;
      });
  
    console.log(newOrder);
    console.log(e.target.value);
  }}
  
  return (
    <div className="card-collection">
      {isLoading ? (
        <h1>Loading...</h1> // render loading message while data is being fetched
      ) : (
        <>
          <h1>PokeDeck</h1>
          {/* Select option to pick sort by */}
          <label>Sort by: <select name= "sort-by" id="sort-by" defaultValue="null" placeholder="null" onChange={e=>handleSort(e)}>
            <option value="rarity-asc">Rarity (asc)</option>
            <option value="rarity-desc">Rarity (desc)</option>
            {/* Release date is data.data[i].set.releaseDate */}
            <option value="release-date-asc">Date released (oldest)</option>
            <option value="release-date-desc">Date released (newest)</option>
          </select></label>
         
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


// For sorting by Rarity -> set up a switch case that assignes a value to each type of rarity --> Read each value of rarity, then sort by value assigned to each card. Then map again - or trigger a rerender.