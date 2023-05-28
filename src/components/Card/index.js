import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ src, alt, key }) {
  const navigate = useNavigate();
  function getCardDetails(event) {
    event.preventDefault();

    navigate("/cardDetails", { state: { src, alt, key } });
  }
  return (
    <li key={key}>
      <img
        src={src}
        alt={alt}
        key={key}
        className="card"
        onClick={getCardDetails}
      />
    </li>
  );
}

export default Card;
