import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

const App = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from the backend when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  // Function to update user list when a new user is added
  const handleUserAdded = (newUser) => {
    setUsers([...users, newUser]); // Update state with new user
  };

  return (
    <div>
      <h1>User Management System</h1>
      <UserForm onUserAdded={handleUserAdded} />
      <UserList users={users} />
    </div>
  );
};

export default App;