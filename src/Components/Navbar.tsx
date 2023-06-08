import "../Styles/styles.sass";
import DarkMode from "./DarkMode";

function Navbar() {
  return (
    <nav className="navbar-container">
      <h1>Where in the world?</h1>
      <DarkMode />
    </nav>
  );
}

export default Navbar;
