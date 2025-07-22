import React from 'react';
import Sidebar from './components/Sidebar'; // adjust path if needed

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
        <p className="text-gray-600 mb-8">Welcome, Admin! Select an option from the sidebar to get started.</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-gray-800 mb-2">Manage Courses</p>
            <p className="text-sm text-gray-600">View and edit all available courses.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-gray-800 mb-2">Add New Course</p>
            <p className="text-sm text-gray-600">Upload and publish a new course.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <p className="text-lg font-semibold text-gray-800 mb-2">Orders</p>
            <p className="text-sm text-gray-600">Check and manage placed orders.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
