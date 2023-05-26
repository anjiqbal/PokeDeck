import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Input.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Input({ getPokemonName }) {
  const navigate = useNavigate();
  const searchIcon = <FontAwesomeIcon icon={faCoffee} />
  const placeHolder = `${searchIcon} Search for a card`
  const [input, setInput] = useState("");
  function handleInput(input) {
    setInput(input);
  }
  function handleSubmit(event) {
    event.preventDefault();
    getPokemonName(input);
    navigate("/cardCollection", { state: input });
    //We set the state to input because setPokemonName has not yet updated the state to include the new input
  }
  function handleEnter(event) {
    if (event.key === "Enter") {
      getPokemonName(input);
    }
  }

  return (
    <div class="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder = "Search for a card"
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
