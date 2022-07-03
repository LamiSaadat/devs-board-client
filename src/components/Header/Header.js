import "./Header.scss";

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom header">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        {/* <img className="bi me-2 header__logo" width="40" height="32"></img> */}
        <span className="fs-4 header__title">Dev's Board</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item header__link header__item--active">
          <a
            href="#"
            className="nav-link header__item-link"
            aria-current="page"
          >
            Home
          </a>
        </li>
        <li className="nav-item header__item">
          <a href="#" className="nav-link header__item-link">
            Boards
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
