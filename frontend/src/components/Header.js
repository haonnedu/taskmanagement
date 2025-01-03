import React from "react";
import { Link } from "react-router-dom";

const Header = ({ user, onLogout }) => {
  return (
    <div className=" text-blue-500 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-semibold">
          Hao Nguyen
        </Link>
        {/* Thêm các đường dẫn nếu cần */}
      </div>
      
      {/* Thông tin người dùng */}
      <div className="flex items-center space-x-4">
        <span>{user ? `Hello, ${user.name}` : "Welcome"}</span>
        {/* Nếu người dùng đã đăng nhập, hiển thị tên người dùng */}
        
        <button
          onClick={onLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
