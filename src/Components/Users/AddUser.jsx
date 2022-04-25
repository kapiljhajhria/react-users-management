import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Loader from "../UI/Loader";

export default function AddUser(props) {
  let nameInputRef = useRef();
  let ageInputRef = useRef();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  //function
  //-

  const addUserHandler = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      const nameEntered = nameInputRef.current.value;
      const ageEntered = ageInputRef.current.value;
      // setTimeout(() => {
      if (!isValidForm(nameEntered, ageEntered)) {
        return;
      }
      props.onAddUser(nameEntered, ageEntered);
      resetForm();
    }, 4000);
  };
  const resetForm = () => {
    ageInputRef.current.value = "";
    nameInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  const isValidForm = (name, age) => {
    if (name.trim().length === 0 || age === "" || +age < 1) {
      setError({
        title: "Input Error",
        message: "Please enter a valid name and age (non-empty values)",
      });
      setTimeout(() => {
        setError(null);
      }, 3000);
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
      {loading && <Loader />}
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
