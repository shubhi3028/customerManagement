import React from 'react';
import './Admin.css';

function Admin() {
  // Sample user data
  const users = [
    { id: 1, username: 'John Doe', email: 'john@example.com',phoneNumber:9876321131,password:1234 },
    { id: 2, username: 'Jane Smith', email: 'jane@example.com', phoneNumber:9876543212, password:1111 },
    // Add more user data here
  ];

  return (
    <div className="Admin">
      <h1>Customer Management</h1>
      <UserList users={users} />
    </div>
  );
}

function UserList({ users }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>UserName</th>
          <th>Email</th>
          <th>PhoneNumber</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phoneNumber}</td>
            <td>
              <button className="edit-button">Edit</button>
              <button className="delete-button">Delete</button>
              <button className="active-button">Active</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Admin;
