import "./App.css";
import logo from "./assets/img/logoHN.jpeg";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <img src={logo} alt="Logo de la aplicación" className="logo" />
        <a href="/" className="nav-link">
          Home
        </a>
        <a href="/top" className="nav-link">
          Top
        </a>
        <a href="/new" className="nav-link">
          New
        </a>
        <a
          href="https://news.ycombinator.com/"
          target="_blank"
          className="nav-link"
        >
          Original
        </a>
        <a
          href="https://github.com/HackerNews/API"
          target="_blank"
          className="nav-link"
        >
          Api
        </a>
      </nav>
    </header>
  );
}

export default Header;
