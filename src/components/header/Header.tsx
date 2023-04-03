import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__menu">
          <ul>
            <li>
              <Link to="/">Build your pizza</Link>
            </li>
            <li>
              <Link to="/">Ingredients</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
