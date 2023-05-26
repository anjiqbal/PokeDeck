import "./Header.css"

function Header() {
  return (
    <header>
      <nav id="nav-bar">
        <div id="title-logo">
        <div className="img-placeholder"></div>
        <h3>PokeDeck</h3>
        </div>    
        <ul className="nav-list">
          <li>Sets</li>
          <li>My Deck</li>
          <li>Wish List</li>
        <button>Sign In</button>
        </ul>

      </nav>
    </header>
  );
}

export default Header;
