import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminProducts from "./adminEdits/AdminProducts";
import AdminUsers from "./adminEdits/AdminUsers"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import AdminOrders from "./adminEdits/AdminOrders";
import AdminFeedbacks from "./adminEdits/AdminFeedbacks";

export default function Admin({ currentUser }) {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [viewPart,setViewPart] = useState(null);

  useEffect(() => {
    if (currentUser?.role !== "Admin") {
      navigate("/");
    }
  }, [currentUser]);

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const menuItems = ["Users", "Orders", "Feedbacks", "Products"];

  return (
    <section className="flex h-screen bg-gray-100">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className={`absolute top-4 left-4 md:hidden p-2 bg-white 
        rounded-md shadow-md z-50 cursor-pointer ${
          sidebarOpen ? 'hidden' : ''
        }`}
      >

        <HiOutlineMenuAlt3 className="w-6 h-6 text-red-500" />

      </button>

      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white shadow-lg p-6 transform transition-transform duration-300 
                    ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                    md:translate-x-0 md:static md:flex md:flex-col`}
      >
        <div className="flex items-center gap-4 mb-10">
          <img
            src="https://bonee.blob.core.windows.net/images/b2167a89-02a4-2b85-b68b-efbdc4238980_1.png"
            className="w-16 h-16 rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-semibold text-gray-700">Admin</h2>
        </div>

        <ul className="flex flex-col gap-3 flex-1">
          {menuItems.map((item) => (
            <li
              key={item}
              className="px-4 py-3 rounded-lg cursor-pointer 
                         text-gray-700 font-medium hover:bg-red-100 
                         hover:text-red-600 transition-colors duration-300"
                         onClick={() => {
                          setViewPart(item)
                          setSidebarOpen(false)
                         }}
            >
              {item}
            </li>
          ))}
        </ul>

        <button
          onClick={logOut}
          className="mt-auto flex items-center justify-between px-4 py-3 
                     bg-red-500 text-white rounded-lg font-semibold 
                     hover:bg-red-600 transition-colors duration-300 
                     max-md:w-full max-md:mt-10 cursor-pointer"
        >
          <span>Exit</span>
          <img src="/Img/logout.png" className="w-5 h-5" />
        </button>
      </div>

      <div className="w-full flex-1 p-6 overflow-y-auto">
        <div
          className="bg-gradient-to-br from-red-400 via-red-500 to-red-600 
                        rounded-2xl p-6 min-h-full shadow-xl"
        >
          {
            viewPart === "Products" 
            ? <AdminProducts currentUser={currentUser} />
            : viewPart === "Users" 
            ? <AdminUsers />
            : viewPart === "Orders" 
            ? <AdminOrders /> 
            : viewPart === "Feedbacks" 
            ? <AdminFeedbacks /> 
            : ''
          }
        </div>
      </div>
    </section>
  );
}
