import "./App.css";

function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h3>Explore</h3>
          <ul>
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
          </ul>
        </div>
      </div>
      <div>
        <h3>Contact</h3>
        <p>Email: aaronpcastell@gmail.com</p>
        <p>Teléfono: +999 999 99 99</p>
      </div>

      <div>
        <p>© 2025 Aaron Puertollano.</p>
      </div>
    </footer>
  );
}

export default Footer;
