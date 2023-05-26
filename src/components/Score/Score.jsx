import React, { useState, useEffect } from 'react';
import "./Score.module.css"
function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch the data from the API endpoint
    fetch('http://localhost:8080/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="table-wrapper">
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
}

export default UserTable;
