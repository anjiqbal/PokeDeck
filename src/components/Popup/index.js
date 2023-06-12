import "./popup.css";

function Popup({
  src,
  alt,
  key,
  name,
  supertype,
  subtypes,
  hp,
  types,
  togglePopup,
  handleClose,
  setName,
  number,
  artist,
  rarity,
}) {
  return (
    <section className="popup">
      <div className="popup__box">
        <button
          className="close-icon"
          onClick={handleClose}
          aria-label="Close"
        >X</button>

        <div className="popup__box-card">
          <img src={src} alt={alt} key={key} onClick={togglePopup} />
        </div>
        <div className="popup__box-info">
          <header className="popup__box-info-header">
            <div className="popup__box-info-left">
              <div>
                <h1>{name}</h1>
                <h2>
                  {supertype} - {subtypes[0]} {subtypes[1]}
                </h2>
              </div>
            </div>
            <div className="popup__box-info-right">
              <h2>
                HP {hp} {types[0]} {types[1]}
              </h2>
            </div>
          </header>
          <div className="more-info">
            <h3>Set: {setName}</h3>
            {/* <h3>Pokedex Number: {number}</h3> */}
            <h3>Rarity: {rarity}</h3>
            <h3>Artist: {artist}</h3>
          </div>
          <div className="popup__box-info-buttons">
            <button type="button">Add to my deck</button>
            <button type="button">Add to wish list</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Popup;
