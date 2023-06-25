// import { useEffect, useState } from "react";
// import "./Feature-card.css";
// import Modal from 'react-bootstrap/Modal';

// function FeatureCard({ isOpen }) {
//   const [featureCard, setFeatureCard] = useState({});
//   const [randomNumber, setRandomNumber] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     async function fetchRandomCard() {
//       try {
//         const response = await fetch(
//           `https://api.pokemontcg.io/v2/cards?q=nationalPokedexNumbers:${randomNumber}`
//         );
//         const data = await response.json();
//         const featureCardNumber = Math.floor(Math.random() * data.data.length);
//         setFeatureCard(data.data[featureCardNumber]);
//         setIsLoading(false); // Card loading is complete
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     if (randomNumber !== null) {
//       setIsLoading(true); // Reset loading state
//       fetchRandomCard();
//     }
//   }, [randomNumber]);

//   useEffect(() => {
//     setRandomNumber(Math.floor(Math.random() * 151));
//   }, []);

//   function handleFetchRandomCard() {
//     setRandomNumber(Math.floor(Math.random() * 151));
//   }

//   console.log(featureCard);

//   return (
//     <section className="feature-card-container">
//       {isLoading ? ( // Render a placeholder element while loading
//         <div className="card-placeholder"></div>
//       ) : (
//         <article className="card">
//           {featureCard.images && featureCard.images.small && (
//             <img
//               src={featureCard.images.small}
//               alt={featureCard.name}
//               key={featureCard.id}
//               data-bs-toggle="modal" // Add data-bs-toggle attribute
//               data-bs-target="#myModal" // Add data-bs-target attribute
//             />
//           )}
//         </article>
//       )}

//       <button type="button" onClick={handleFetchRandomCard}>
//         Fetch random card
//       </button>

//       {isOpen && (
//         <div className="modal" id="myModal">
//           <div className="modal-dialog">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h4 className="modal-title">Modal Heading</h4>
//                 <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
//               </div>
//               <div className="modal-body">
//                 <div className="popup__box">
//                   <div className="popup__box-card">
//                     <img src={featureCard.images.small} alt={featureCard.name} key={featureCard.id} />
//                   </div>
//                   <div className="popup__box-info">
//                     <header className="popup__box-info-header">
//                       <div className="popup__box-info-left">
//                         <div>
//                           <h1>{featureCard.name}</h1>
//                           <h2>
//                             {featureCard.supertype} - {featureCard.subtypes[0]} {featureCard.subtypes[1]}
//                           </h2>
//                         </div>
//                       </div>
//                       <div className="popup__box-info-right">
//                         <h2>
//                           HP {featureCard.hp} {featureCard.types[0]} {featureCard.types[1]}
//                         </h2>
//                       </div>
//                     </header>
//                     <div className="more-info">
//                       <h3>Set: {featureCard.set.name}</h3>
//                       {/* <h3>Pokedex Number: {randomNumber}</h3> */}
//                       <h3>Rarity: {featureCard.rarity}</h3>
//                       <h3>Artist: {featureCard.artist}</h3>
//                     </div>
//                     <div className="popup__box-info-buttons">
//                       <button type="button">Add to my deck</button>
//                       <button type="button">Add to wish list</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="modal-footer">
//                 <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// export default FeatureCard;



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

