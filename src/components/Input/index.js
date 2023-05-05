import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Input({ getPokemonName, pokemonName }) {
  const navigate = useNavigate();

  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getPokemonName(input);
    navigate("/cardCollection", { state: pokemonName });
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      getPokemonName(input);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => {
            handleInput(event.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Input;
