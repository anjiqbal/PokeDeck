import { useLocation } from "react-router-dom";
import Header from "../../components/Header/index";

function CardDetails() {
  const location = useLocation();
  const { src, alt, key } = location.state;
  return (
    <div>
      <header>
        <Header />
      </header>
      <h2>heyyy gurll</h2>
      <img src={src} alt={alt} key={key} />
    </div>
  );
}

export default CardDetails;
