import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "./CreateBoardForm.scss";

function CreateBoardForm() {
  const [boardName, setBoardName] = useState("");
  const [keyword, setKeyword] = useState("");
  const [keywordList, setKeywordList] = useState([]);
  const base_URL = process.env.REACT_APP_API_URL;
  const history = useHistory();

  useEffect(() => {
    axios.get(`${base_URL}/keywords`).then((response) => {
      setKeywordList(response.data);
    });
  }, []);

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value);
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/create", { boardName, keyword });
  };

  return (
    //bootstrap form
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
            required
          />
          <label htmlFor="floatingInput">Board Name</label>
        </div>
        <div className="form-floating mb-3 form__input-container">
          <select
            className="form-control form__input"
            id="floatingPassword"
            name="keyword"
            value={keyword}
            onChange={handleKeywordChange}
            required
          >
            <option key="" value="">
              Please select
            </option>
            {keywordList.map((keyword) => {
              return (
                <option key={uuidv4()} value={keyword}>
                  {keyword}
                </option>
              );
            })}
          </select>
          <label htmlFor="floatingPassword">Keyword</label>
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
