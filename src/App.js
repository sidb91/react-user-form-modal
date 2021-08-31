import { useState } from "react";
import "./App.css";
import AddUser from "./components/users/AddUser";
import UserList from "./components/users/UserList";

function App() {
  const [userListArray, setUserListArray] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserListArray((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser addUser={addUserHandler} />
      <UserList users={userListArray} />
    </div>
  );
}

export default App;
