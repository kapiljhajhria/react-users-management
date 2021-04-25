import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

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

  const errorHandler = () => {
    setError(null);
  };
  const isValidForm = () => {
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge === "" ||
      enteredAge < 1
    ) {
      setError({
        title: "Input Error",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return false;
    }

    return true;
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
