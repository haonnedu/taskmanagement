import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';  // Đảm bảo dùng Navigate thay vì Redirect
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);  // Kiểm tra trạng thái đăng nhập từ context
  const location = useLocation();
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname }} // Lưu URL hiện tại vào state
        replace
      />
    );
  }
  return <Component {...rest} />;  // Điều hướng đến trang login nếu không có user
};

export default PrivateRoute;
