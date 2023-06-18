import { useLocation } from "react-router-dom";
import { Header } from "../../components/Header";
import './CardDetails.css'

function CardDetails() {
  const location = useLocation();
  const {
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
  } = location.state;
  return (
    <div>
      <header>
        <Header />
      </header>
      <section className="details">
        <div className="details__box">
          <div className="details__box-card">
            <img src={srcLarge} alt={alt} key={key} />
          </div>
          <div className="details__box-info">
            <header className="details__box-info-header">
              <div className="details__box-info-left">
                <div>
                  <h1>{name}</h1>
                  <h2>
                    {supertype} - {subtypes[0]} {subtypes[1]}
                  </h2>
                </div>
              </div>
              <div className="details__box-info-right">
                <h2>
                  HP {hp} {types[0]} {types[1]}
                </h2>
              </div>
            </header>
            <div className="details-more-info">
              <h3>Set: {setName}</h3>
              {/* <h3>Pokedex Number: {number}</h3> */}
              <h3>Rarity: {rarity}</h3>
              <h3>Artist: {artist}</h3>
            </div>
            <div className="details__box-info-buttons">
              <button type="button">Add to my deck</button>
              <button type="button">Add to wish list</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CardDetails;
