import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  //function
  //-
  const inputChangeHandler = (stateUpdateHandler) => {
    return (event) => {
      stateUpdateHandler(event.target.value);
    };
  };

  const addUserHandler = (e) => {
    e.preventDefault();
    if (!isValidForm()) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    resetForm();
  };
  const resetForm = () => {
    setEnteredUsername("");
    setEnteredAge("");
  };

  const isValidForm = () => {
    if (enteredUsername.trim().length === 0) return false;
    if (enteredAge === "" || enteredAge === "0") return false;
    return true;
  };

  return (
    <div>
      <ErrorModal title="error occured" message="something went wrong" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler} className={classes.form}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={inputChangeHandler(setEnteredUsername)}
          />
          <label htmlFor="age">Age(years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={inputChangeHandler(setEnteredAge)}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
