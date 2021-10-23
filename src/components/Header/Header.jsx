import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <nav>
          <Link to="/" className="header__link">Reciples</Link>
        </nav>
      </div>
      
    </header>
  );
}

export { Header };
