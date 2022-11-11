import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";

import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterUsername, enterAge);
  };

  const usernameChangHandler = (event) => {
    setEnterUsername(event.target.value);
  };

  const ageChangHandler = (event) => {
    setEnterAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input id="username" type="text" onChange={usernameChangHandler} />
        <label>Age (Years)</label>
        <input id="age" type="number" onChange={ageChangHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
