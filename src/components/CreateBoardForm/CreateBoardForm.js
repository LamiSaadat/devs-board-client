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
    <div className="col-md-10 mx-auto col-lg-5 form-container">
      <form
        className="p-4 p-md-5 border rounded-3 bg-light form"
        onSubmit={handleSubmit}
      >
        <div className="form-floating mb-3 form__input-container">
          <input
            type="text"
            className="form-control form__input"
            id="floatingInput"
            name="boardName"
            value={boardName}
            onChange={handleBoardNameChange}
            placeholder="Enter board name..."
          />
          <label for="floatingInput">Board Name</label>
        </div>
        <div className="form-floating mb-3 form__input-container">
          <input
            type="text"
            className="form-control form__input"
            id="floatingPassword"
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            placeholder="Enter keyword..."
          />
          <label for="floatingPassword">Keyword</label>
        </div>

        <button
          className="w-100 btn btn-lg btn-primary form__btn"
          type="submit"
        >
          Create Board
        </button>
      </form>
    </div>
  );
}

export default CreateBoardForm;
