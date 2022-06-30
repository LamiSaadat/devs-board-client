import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./CreateBoardForm.scss";

function CreateBoardForm() {
  const [boardName, setBoardName] = useState("");
  const [keyword, setKeyword] = useState("");
  const history = useHistory();

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value);
    console.log("board name changed: ", e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    console.log("keyword changed: ", e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/board/create", { boardName, keyword });
    console.log(boardName, keyword);
  };

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
                type="text"
                className="form-control"
                id="floatingInput"
                name="boardName"
                value={boardName}
                onChange={handleBoardNameChange}
                placeholder="Enter board name..."
              />
              <label for="floatingInput">Board Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                id="floatingPassword"
                name="keyword"
                value={keyword}
                onChange={handleKeywordChange}
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

export default CreateBoardForm;
