import { useLocation } from "react-router-dom";

function CardDetails() {
  const location = useLocation();
  const src = location.state.src;
  return (
    <div>
      <h1>heyyy gurll</h1>
      <img src={src} alt={'a pokemon'} />
    </div>
  );
}

export default CardDetails;
