import React from 'react';
import AddMarathon from './Add Marathon/AddMarathon';
import { Link } from 'react-router';

const Sidebar = () => {
    return (
        <div className="w-64 bg-white border-r px-4 py-6 hidden lg:block">
            <nav className="space-y-4">
                <Link to="add-marathon" className="block text-blue-600 hover:underline">Add Marathon</Link>
                <Link to="my-marathons" className="block text-blue-600 hover:underline">My Marathon List</Link>
                <Link to="/apply-list" className="block text-blue-600 hover:underline">My Apply List</Link>
            </nav>
        </div>
    );
};

export default Sidebar;