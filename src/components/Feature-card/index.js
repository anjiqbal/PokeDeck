import { useEffect, useState } from "react";
import Popup from "../Popup";
import "./Feature-card.css";


function FeatureCard({ togglePopup, isOpen }) {
  const [featureCard, setFeatureCard] = useState({});
  const [randomNumber, setRandomNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
 

  useEffect(() => {
    async function fetchRandomCard() {
      try {
        const response = await fetch(
          `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randomNumber}`
        );
        const data = await response.json();
        const featureCardNumber = Math.floor(Math.random() * data.data.length);
        setFeatureCard(data.data[featureCardNumber]);
        setIsLoading(false); // Card loading is complete
      } catch (error) {
        console.log(error);
      }
    }

    if (randomNumber !== null) {
      setIsLoading(true); // Reset loading state
      fetchRandomCard();
    }
  }, [randomNumber]);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 151));
  }, []);

function handleFetchRandomCard () {
    setRandomNumber(Math.floor(Math.random() * 151));
  };
  





  console.log(featureCard);

  return (
    <section className="feature-card-container">
      {isLoading ? ( // Render a placeholder element while loading
        <div className="card-placeholder"></div>
      ) : (
        <article className="card">
          {featureCard.images && featureCard.images.small && (
         <img src={featureCard.images.small} alt={featureCard.name} key={featureCard.id} onClick={togglePopup}/>
          )}
        </article>
      )}
  <button type="button" onClick={handleFetchRandomCard}>
    Fetch random card
  </button>


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
    </section>
  );
}

export default FeatureCard;
