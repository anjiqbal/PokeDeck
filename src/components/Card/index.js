import "./Card.css";

function Card({ src, alt, key, togglePopup }) {
  return (
    <div className="card">
      <img src={src} alt={alt} key={key} onClick={togglePopup}/>
    </div>
  );
}

export default Card;
