import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-6 space-y-6">
      <h2 className="text-2xl font-bold">Admin Panel</h2>
      <nav className="space-y-4">
        <a href="/admin/dashboard" className="block hover:text-yellow-400">Dashboard</a>
        <a href="/admin/Users" className="block hover:text-yellow-400">Users</a>
        <a href="/admin/add-course" className="block hover:text-yellow-400">Add-Courses</a>
         <a href="/admin/allcourses" className="block hover:text-yellow-400">All-Courses</a>
        <a href="/admin/orders" className="block hover:text-yellow-400">Orders</a>
        <a href="/home" className="block hover:text-yellow-400">Logout</a>
      </nav>
    </div>
  );
};

export default Sidebar;
