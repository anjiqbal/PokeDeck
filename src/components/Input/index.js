import { useState } from "react";

function Input({ getPokemonName }) {
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getPokemonName(input);
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
