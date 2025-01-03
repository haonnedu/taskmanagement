import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function UserList() {
  const [users, setUsers] = useLocalStorage('users', []);
  
  const addUser = (name) => {
    setUsers([...users, { id: users.length + 1, name }]);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <AddUserForm onAddUser={addUser} />
    </div>
  );
}

function AddUserForm({ onAddUser }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      onAddUser(name);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <button type="submit">Add User</button>
    </form>
  );
}

export default UserList;
