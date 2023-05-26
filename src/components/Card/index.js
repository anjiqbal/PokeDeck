import "./Card.css";
import { useNavigate } from "react-router-dom";

function Card({ src, alt, key }) {
  const navigate = useNavigate();
  function getCardDetails(event){
    event.preventDefault();
   
    navigate("/cardDetails", { state: { src, alt, key } });
  }
  return (
    <div className="card">
      <img src={src} alt={alt} key={key} onClick={getCardDetails}/>
    </div>
  );
}

export default Card;
