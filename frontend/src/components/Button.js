import React from 'react';

const Button = ({ label, onClick, className, color }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-${color}-500 text-white py-2 px-4 rounded ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;