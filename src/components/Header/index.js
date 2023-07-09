import {  Link } from "react-router-dom";


import "./Header.css"

//import { Logo } from './Logo'

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/">
          {/* <img src={} alt="Logo" className="navbar-logo" /> */}
          <span className="navbar-brand-name">PokeDeck</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse " id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link first" to="/profile">
              Sets
            </Link>
            <Link className="nav-link" to="/uploadForm">
              My Decks
            </Link>
            <Link className="nav-link" to="/storyCollection">
              Wishlist
            </Link>
            <Link className="nav-link signup-button" to="/storyCollection">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import "./Header.css";

// function Header() {
//   return (
//     <header>
//       <nav id="nav-bar">
//         <div id="title-logo">
//           <div className="img-placeholder"></div>
//           <h1>PokeDeck</h1>
//         </div>
//         <ul className="nav-list">
//           <li>Sets</li>
//           <li>My Deck</li>
//           <li>Wish List</li>
//           <button>Sign In</button>
//         </ul>
//       </nav>
//     </header>
//   );
// }
