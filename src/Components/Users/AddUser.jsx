import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  let nameInputRef = useRef();
  let ageInputRef = useRef();
  const [error, setError] = useState();

  //function
  //-

  const addUserHandler = (e) => {
    const nameEntered = nameInputRef.current.value;
    const ageEntered = ageInputRef.current.value;
    e.preventDefault();
    if (!isValidForm(nameEntered, ageEntered)) {
      return;
    }
    props.onAddUser(nameEntered, ageEntered);
    resetForm();
  };
  const resetForm = () => {
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  const isValidForm = (name, age) => {
    if (name.trim().length === 0 || age === "" || age < 1) {
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
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age(years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
