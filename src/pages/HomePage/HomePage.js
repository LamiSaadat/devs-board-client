import "./HomePage.scss";

function HomePage() {
  return (
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Dev's Board</h1>
          <p class="col-lg-10 fs-4">For devs by a dev :D</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <form class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="Enter board name..."
              />
              <label for="floatingInput">Board Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Enter keyword..."
              />
              <label for="floatingPassword">Keyword</label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Create Board
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
