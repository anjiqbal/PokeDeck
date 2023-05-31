import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({
  srcSmall,
  srcLarge,
  name,
  alt,
  key,
  supertype,
  subtypes,
  hp,
  types,
  setName,
  artist,
  rarity,
}) {
  const navigate = useNavigate();
  function getCardDetails(event) {
    event.preventDefault();
    navigate("/cardDetails", {
      state: {
        srcSmall,
        srcLarge,
        name,
        alt,
        key,
        supertype,
        subtypes,
        hp,
        types,
        setName,
        artist,
        rarity,
      },
    });
  }
  return (
    <li key={key}>
      <img
        src={srcSmall}
        alt={alt}
        key={key}
        className="card"
        onClick={getCardDetails}
      />
    </li>
  );
}

export default Card;
