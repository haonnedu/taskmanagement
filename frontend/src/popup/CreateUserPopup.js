// CreateUserPopup.js

import React, { useEffect, useState } from 'react';
import InputComponent from '../components/Input';

const CreateUserPopup = ({ editMode, user, onClose, onSave }) => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    fullName: '',
    role:''
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  useEffect(() => {
    if (editMode && user) {
      setUserData(user);
    }
  }, [editMode, user]);
  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(userData);  // Call onSave to pass data to parent
    onClose();  // Close the popup after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">{editMode ? "Edit User" : "Create User"}</h2>
        <form onSubmit={handleSubmit} className='grid grid-cols-2 gap-4'>
          <InputComponent
            label="Username"
            type="text"
            name="username"
            value={userData.username}
            onChange={handleInputChange}
            required={true}
          />
          <InputComponent
            label="Full Name"
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            required={true}
          />
          <InputComponent
            label="Email"
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            required={true}
          />
          <InputComponent
            label="Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
            required={true}
          />
            <InputComponent
            label="Role"
            type="role"
            name="role"
            value={userData.role}
            onChange={handleInputChange}
            required={true}
          />
          <div className="col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUserPopup;
