function Card({ src, alt, key }) {
  return (
    <div className="pokemon-viewer">
      <img src={src} alt={alt} key={key} />
    </div>
  );
}

export default Card;
