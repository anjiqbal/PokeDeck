import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Card/index";
import "./CardCollection.css";
import Header from "../../components/Header";

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
      const rarities = await fetch(
        `https://api.pokemontcg.io/v2/rarities`
      );
      const data = await res.json();
      const rarData = await rarities.json()
      console.log(rarData)
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
// Switch cases to sort rarity by value
switch(pokemon.rarity) {


// How to assign value based on case - update current array (make shallow copy and update?) - possibly a for/ for each loop.


  case "Common":
  case "Uncommon":
  case "Classic Collection":
  case "Promo":
    break;
    
  case "Rare Holo":
  case "Rare Rainbow":
  case "Rare Shiny":
  case "Rare Ultra":
  case "Rare":
    break;

  case "Rare Prism Star":
  case "Rare ACE":
  case "Rare Holo Star":
  case "Rare Prime":
  case "Rare BREAK":
  case "Rare Shining":
    break;


  case "Rare Holo LV.X":
  case "Rare Holo GX":
  case "Rare Holo EX":
  case "Rare Holo V":
  case "Rare Shiny GX":
    break;
  

  case "Hyper Rare" :
  case "Ultra Rare" :
  case "Double Rare" :
  case "Rare Secret" :
  case "Radiant Rare" :
    break;

  case "Special Illustration Rare":
  case "Trainer Gallery Rare Holo":
  case "Amazing Rare":
  case "Rare Holo VSTAR":
  case "Rare Holo VMAX":
    break;

  
  case "LEGEND":
    break;

  default: console.log("No value")
    break;




}




    let newOrder = [];
    pokemon.map((pokemon)=>{console.log(pokemon.rarity)})
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
          <Header />
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


/*

1. "LEGEND"
2. "Special Illustration Rare"
3. "Trainer Gallery Rare Holo"
4. "Amazing Rare"
5. "Rare Holo VSTAR"
6. "Rare Holo VMAX"
7. "Hyper Rare"
8. "Ultra Rare"
14. "Double Rare"
15. "Rare Secret"
16. "Radiant Rare"
9. "Rare Holo LV.X"
10. "Rare Holo GX"
11. "Rare Holo EX"
17. "Rare Holo V"
24. "Rare Shiny GX"
12. "Rare Prism Star"
13. "Rare ACE"
18. "Rare Holo Star"
19. "Rare Prime"
20. "Rare BREAK"
21. "Rare Shining"
22. "Rare Holo"
23. "Rare Rainbow"
25. "Rare Shiny"
26. "Rare Ultra"
27. "Rare"
30. "Promo"
31. "Classic Collection"
29. "Uncommon"
28. "Common"




Consider rearranging this order - a switch case will need to be implemented - possibly grouping into 8ish or less catagories and sorting accordingly.
*/