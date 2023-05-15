import "./Card.css";

function Card({ src, alt, key }) {
  return (
    <div className="card">
      <img src={src} alt={alt} key={key} />
    </div>
  );
}

export default Card;
