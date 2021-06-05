import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFirstName, updateLastName } from "./redux/actions";

const App = () => {
  const dispatch = useDispatch();
  const nameReducer = useSelector((state) => state.nameReducer);
  const { firstName, lastName } = nameReducer;
  console.log("nameReducer", nameReducer);
  const handleFirstName = () => {
    dispatch(updateFirstName("Jason"));
  };
  const handleLastName = () => {
    dispatch(updateLastName("Stathan"));
  };
  return (
    <React.Fragment>
      <div className="container">
        <label>First Name : {firstName}</label>
        <button onClick={handleFirstName}>Update First Name</button>
        <label>Last Name : {lastName}</label>
        <button type="submit" onClick={handleLastName}>
          Update First Name
        </button>
      </div>
      {/* <div className="container">
        <div className="brand-logo"></div>
        <div className="brand-title">Redux Hooks</div>
        <div className="inputs">
          <label>Enter First Name</label>
          <input type="text" placeholder="First Name" />
          <label>Enter Last Name</label>
          <input type="text" placeholder="Last Name" />
          <button type="submit">LOGIN</button>
        </div>
        <a href="https://twitter.com/prathkum">MADE BY Bilal Bangash</a>
      </div> */}
    </React.Fragment>
  );
};

export default App;
