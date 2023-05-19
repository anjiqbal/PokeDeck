import { useEffect, useState } from "react";
import Card from "../Card";
import Popup from "../Popup";

function FeatureCard({ togglePopup, isOpen }) {
  let [featureCard, setFeatureCard] = useState({});

  useEffect(() => {
    async function fetchRandomCard() {
      let randomNumber = Math.floor(Math.random() * 151);
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randomNumber}`
      );
      const data = await response.json();
      let featureCardNumber = Math.floor(Math.random() * data.data.length);
      setFeatureCard(data.data[featureCardNumber]);
    }
    fetchRandomCard();
  }, []);
  console.log(featureCard);
  return (
    <div>
      <div>
        {featureCard.images && featureCard.images.small && (
          <Card
            src={featureCard.images.small}
            alt={featureCard.name}
            key={featureCard.id}
            togglePopup={togglePopup}
            isOpen={isOpen}
          />
        )}
      </div>
      <div>
        <input
          type="button"
          value="Click to Open Popup"
          onClick={togglePopup}
        />

        {isOpen && <Popup handleClose={togglePopup} />}
      </div>
    </div>
  );
}

export default FeatureCard;
