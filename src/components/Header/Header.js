import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    //bootstrap header
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom header">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <span className="fs-4 header__title">Dev's Board</span>
      </a>

      <ul className="nav nav-pills header__links">
        <li className="nav-item header__link header__item">
          <NavLink
            to="/"
            exact
            className="nav-link header__item-link"
            activeClassName="active"
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item header__item">
          <NavLink
            to="/board/gallery"
            className="nav-link header__item-link"
            activeClassName="active"
          >
            Boards
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
