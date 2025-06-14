import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../DashBoard/Sidebar';
import Navbar from '../Header/Navbar';
import Footer from '../Header/Footer';

const DashBoardLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="flex">
                {/* Sidebar */}
                <aside>
                    <Sidebar />
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-4 bg-gray-100">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
};

export default DashBoardLayout;