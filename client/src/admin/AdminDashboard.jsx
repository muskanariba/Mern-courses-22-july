import React from 'react';
import Sidebar from './components/Sidebar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Sidebar/> {/* Sidebar ki jagah ab top navbar */}

      <main className="p-6">
        <h1 className="text-5xl font-bold text-black mb-4 mt-5">
          Welcome to the Admin Panel
        </h1>

        <p className="text-lg text-gray-700 mb-10">
          Here's your control center. Manage everything from one place with style and power. 🚀
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-yellow-100 text-yellow-900 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
            <h4 className="font-semibold mb-1">⚙️ Manage Courses</h4>
            <p className="text-sm text-gray-600">Add, edit, or remove courses.</p>
          </div>
          <div className="bg-yellow-100 text-yellow-900 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
            <h4 className="font-semibold mb-1">👥 User Insights</h4>
            <p className="text-sm text-gray-600">Track signups and activity.</p>
          </div>
          <div className="bg-yellow-100 text-yellow-900 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-200">
            <h4 className="font-semibold mb-1">💬 Feedback Panel</h4>
            <p className="text-sm text-gray-600">Review what users are saying.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-yellow-300">
          <h2 className="text-2xl font-bold text-yellow-500 mb-3">Tips</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>Use navbar to navigate between sections</li>
            <li>Check analytics weekly for performance updates</li>
            <li>Stay creative and organized 🎯</li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
