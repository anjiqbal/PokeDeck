import { useState } from "react";

function Input({ getPokemonName }) {
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          handleInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          getPokemonName(input);
        }}
      >
        Search
      </button>
    </div>
  );
}

export default Input;
