// src/components/CustomToast.jsx
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={3000} // Tự động đóng sau 3 giây
      hideProgressBar={true} // Ẩn thanh tiến trình
      closeOnClick // Cho phép click để đóng
      pauseOnHover={true} // Không tạm dừng khi hover
      draggable={false} // Không cho phép kéo
      theme="light" // Giao diện sáng
    />
  );
};

// Export sẵn các hàm tiện ích để sử dụng toast
export const showSuccessToast = (message) => {
  toast.success(message, {
    icon: "✅", // Thêm icon tùy chỉnh (hoặc bỏ nếu không cần)
  });
};

export const showErrorToast = (message) => {
  toast.error(message, {
    icon: "❌", // Icon tùy chỉnh cho lỗi
  });
};

export default CustomToast;
