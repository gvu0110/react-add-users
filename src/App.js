import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, age) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { username: username, age: age, id: Math.random().toString() },
      ];
    });
  };

  return (
    // Use built-in React/JSX empty wrapper component, similiar as <React.Fragment></React.Fragment>
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
