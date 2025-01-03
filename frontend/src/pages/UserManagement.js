import React, { useEffect, useState } from 'react';
import axios from "axios";
import Button from '../components/Button';
import CreateUserPopup from '../popup/CreateUserPopup';
import CustomToast, { showErrorToast, showSuccessToast } from '../components/CustomToast';

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
const UserManagement = () => {
  const [users, setUsers] = useState([]); // State để lưu trữ dữ liệu người dùng

  useEffect(() => {
    // Gọi API khi component được render lần đầu
    axios
      .get(apiUrl + "/users") // Thay bằng URL đúng của backend
      .then((response) => {
        setUsers(response.data); // Cập nhật state với dữ liệu người dùng
      })
      .catch((err) => {
        showErrorToast("Failed to fetch users!");
      });
  }, []); // Mảng phụ thuộc rỗng, chỉ gọi khi component được mount
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  // Open popup
  const handleOpenCreate = () => {
    setEditMode(false); // Set chế độ Create
    setSelectedUser(null); // Không truyền dữ liệu
    setIsPopupOpen(true); // Mở popup
  };

  const handleOpenEdit = (user) => {
    setEditMode(true); // Set chế độ Edit
    setSelectedUser(user); // Truyền dữ liệu user cần chỉnh sửa
    setIsPopupOpen(true); // Mở popup
  };
  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  // Function to handle saving a new user
  const handleSaveUser = async (userData) => {
    try {
      if (editMode) {
        await axios.put(`${apiUrl}/users/${userData.id}`, userData, {
          headers: {
            'Content-Type': 'application/json', // Đảm bảo định dạng JSON
          },
        });
        showSuccessToast("User created successfully!");
      } else {
        await axios.post(`${apiUrl}/users`, userData, {
          headers: {
            'Content-Type': 'application/json', // Đảm bảo định dạng JSON
          },
        });
        showSuccessToast("User created successfully!");
      }
    } catch (error) {
      showErrorToast("Failed to save user. Please try again.");
    }


  };

  return (
    <div className=" container mx-auto p-4">
      <CustomToast />
      <h2 className="text-2xl font-semibold mb-4 border-b border-gray-300">User Management</h2>

      <Button label="Create" color="blue" className="flex mb-2 ml-auto " onClick={handleOpenCreate} />
      {isPopupOpen && (
        <CreateUserPopup editMode={editMode} user={selectedUser} onClose={closePopup} onSave={handleSaveUser} />
      )}
      {/* Table to display user list */}
      <table className="min-w-full table-auto bg-white border-collapse border border-gray-200 rounded-lg">
        <thead>
          <tr>
            <th className="py-2 px-4 border">ID</th>
            <th className="py-2 px-4 border">Username</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border w-32">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td className="py-2 px-4 border text-left">{user.id}</td>
              <td className="py-2 px-4 border">{user.username}</td>
              <td className="py-2 px-4 border">{user.email}</td>
              <td className="py-1 border text-center">
                {/* Button to edit user */}
                <Button label={
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>} color="yellow" className="text-yellow-600 px-4 py-1 rounded-md mr-2" onClick={() => handleOpenEdit(user)} />
                {/* Button to delete user */}
                <Button label={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
                </svg>} className=" text-red-600 px-4 py-1 rounded-md" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserManagement;
