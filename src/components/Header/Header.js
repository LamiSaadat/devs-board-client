import "./Header.scss";

function Header() {
  return (
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
      >
        <img class="bi me-2" width="40" height="32"></img>
        <span class="fs-4">Dev's Board</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a href="#" class="nav-link active" aria-current="page">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            Boards
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
