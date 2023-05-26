import { useLocation } from "react-router-dom";
import Header from "../../components/Header/index";

function CardDetails() {
  const location = useLocation();
  const { src, alt, key } = location.state;
  return (
    <div>
      <Header />
      <h1>heyyy gurll</h1>
      <img src={src} alt={"a pokemon"} />
    </div>
  );
}

export default CardDetails;
