import React, { useState } from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../DashBoard/Sidebar';
import Navbar from '../Header/Navbar';
import Footer from '../Header/Footer';
import { FaBars } from "react-icons/fa";


const DashBoardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      {/* Mobile Menu Button */}
      <div className="lg:hidden bg-white p-4 shadow flex items-center justify-between">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="text-2xl text-gray-700"
        >
          <FaBars />
        </button>
        <h1 className="text-lg font-bold">Dashboard</h1>
      </div>

      <div className="flex flex-1 relative">
        {/* Sidebar Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:static lg:block`}
        >
          <Sidebar onLinkClick={() => setIsSidebarOpen(false)} />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 bg-gray-100 overflow-x-hidden">
          <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DashBoardLayout;