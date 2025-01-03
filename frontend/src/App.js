import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [user, setUser] = useState({
    name: "John Doe", // Giả sử đây là thông tin người dùng
    // Thông tin khác như email, role, v.v.
  });

  const handleLogout = () => {
    // Xử lý đăng xuất, ví dụ xóa token hoặc chuyển hướng về trang login
    setUser(null); // Đặt lại user thành null
    // Điều hướng về trang đăng nhập, nếu cần
    window.location.href = "/login";
  };
  return (
<AuthProvider>
<Router>
  <div className="flex h-screen">
    <Navbar /> {/* Sidebar */}
    <div className="flex-1 flex flex-col">
      <Header user={user} onLogout={handleLogout} /> {/* Header */}
      <div className="flex-1 w-full h-full p-8 overflow-auto bg-gray-100">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard/>} />
          <Route path="/users" element={<PrivateRoute component={UserManagement} />} />
        </Routes>
      </div>
    </div>
  </div>
</Router>
</AuthProvider>
  );
};

export default App;
