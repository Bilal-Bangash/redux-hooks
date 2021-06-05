import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName, updateLastName } from "../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const nameReducer = useSelector((state) => state.nameReducer);
  const { firstName, lastName, message } = nameReducer;
  const handleFirstName = () => {
    dispatch(updateFirstName("Jason"));
  };
  const handleLastName = () => {
    dispatch(updateLastName("Stathan"));
  };
  const handleReset = () => {
    dispatch({ type: "", action: {} });
  };
  return (
    <React.Fragment>
      <div className="container">
        <label>First Name : {firstName}</label>
        <button onClick={handleFirstName}>Update First Name</button>
        <br />
        <br />
        <label>Last Name : {lastName}</label>
        <button type="submit" onClick={handleLastName}>
          Update First Name
        </button>

        <br />
        <br />
        <br />
        {message && (
          <label style={{ background: "lightgreen" }}>{message}</label>
        )}
        <br />
        <button
          style={{ background: "red" }}
          type="submit"
          onClick={handleReset}
        >
          Reset
        </button>
        <a
          href="https://github.com/Bilal-Bangash"
          target="_blank"
          rel="noopener noreferrer"
        >
          MADE BY M Bilal Bangash
        </a>
      </div>
    </React.Fragment>
  );
};

export default Form;
