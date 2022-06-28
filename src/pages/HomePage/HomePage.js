import "./HomePage.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react";

function HomePage() {
  const [keyword, setKeyword] = useState("");

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    axios.get(`http://localhost:8080/palettes/${keyword}`).then((response) => {
      console.log(response.data);
    });
  }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 mb-3">Dev's Board</h1>
          <p className="col-lg-10 fs-4">For devs by a dev :D</p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form
            className="p-4 p-md-5 border rounded-3 bg-light"
            onSubmit={handleSubmit}
          >
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                name="boardName"
                placeholder="Enter board name..."
              />
              <label for="floatingInput">Board Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                name="inputKeyword"
                onChange={handleChange}
                placeholder="Enter keyword..."
              />
              <label for="floatingPassword">Keyword</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Create Board
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
