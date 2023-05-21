import { useEffect, useState } from "react";
import Card from "../Card";
import Popup from "../Popup";

function FeatureCard({ togglePopup, isOpen }) {
  let [featureCard, setFeatureCard] = useState({});
  let [randomNumber, setRandomNumber] = useState(null)

  
 
  useEffect(() => {
    async function fetchRandomCard() {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randomNumber}`
      );
      const data = await response.json();
      let featureCardNumber = Math.floor(Math.random() * data.data.length);
      setFeatureCard(data.data[featureCardNumber]);
    }
    fetchRandomCard();
  },[] );
  console.log(featureCard);
  return (
    <div>
      {Object.keys(featureCard).length > 0 && ( // Add a conditional check before rendering the card
        <div>
          {featureCard.images && featureCard.images.small && (
            <Card
              src={featureCard.images.small}
              alt={featureCard.name}
              key={featureCard.id}
              togglePopup={togglePopup}
            />
          )}
        </div>
      )}

      {isOpen && (
        <Popup
          handleClose={togglePopup}
          src={featureCard.images.large}
          alt={featureCard.name}
          key={featureCard.id}
          name={featureCard.name}
          supertype={featureCard.supertype}
          subtypes={featureCard.subtypes}
          hp={featureCard.hp}
          types={featureCard.types}
          setName={featureCard.set.name}
          number={randomNumber}
          artist={featureCard.artist}
          rarity={featureCard.rarity}
        />
      )}
    </div>
  );
}

export default FeatureCard;
