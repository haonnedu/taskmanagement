import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Trạng thái mở/đóng của Sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Thay đổi trạng thái mở/đóng
  };

  return (
    <div className={`flex ${isOpen ? "w-64" : "w-20"} transition-all duration-300 ease-in-out bg-blue-800 text-white`}>
      <div className="flex flex-col w-full h-screen">
        <button
          className="p-4 text-white"
          onClick={toggleSidebar}
        >
          {isOpen ? (
            <div className="flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
            </div>
        
        ) : (
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </svg>
            </div>
        )}
        </button>
        <ul className="mt-8">
          <li>
            <Link to="/" className="block py-2 px-4 hover:bg-gray-700">
              Dashboard
            </Link>
          </li>
          <li>
            <div className="flex items-center justify-start p-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white " viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V3z" clipRule="evenodd" />
                </svg>
                {isOpen && <span className="ml-2">Brand</span>}
            </div>

            <Link to="/users" className="block py-2 px-4 hover:bg-gray-700">
              Users
            </Link>
          </li>
          <li>
            <Link to="/appointments" className="block py-2 px-4 hover:bg-gray-700">
              Appointments
            </Link>
          </li>
          <li>
            <Link to="/records" className="block py-2 px-4 hover:bg-gray-700">
              Medical Records
            </Link>
          </li>
          <li>
            <Link to="/settings" className="block py-2 px-4 hover:bg-gray-700">
              Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
