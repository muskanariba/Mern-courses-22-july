import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../api/userApi';
import Sidebar from './components/Sidebar';

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        setUsers(res.data); // Adjust if data shape is different
      } catch (err) {
        console.error('Failed to fetch users:', err);
        setError('Failed to load users.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
   <div className="min-h-screen bg-white text-black font-sans">
      <Sidebar/> {/* Sidebar ki jagah ab top navbar */}
      {/* Main Content */}
      <main className="flex-1 p-6 sm:p-10">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-black mb-2">Users List</h1>
          <p className="text-sm text-gray-600">All registered users on the platform.</p>
        </div>

        {/* Table or Status */}
        {loading && <p className="text-center p-4 text-gray-500">Loading...</p>}
        {error && <p className="text-center p-4 text-red-500">{error}</p>}

        <div className="overflow-x-auto shadow rounded-2xl">
          <table className="min-w-full text-sm bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <thead className="bg-yellow-500 text-white">
              <tr>
                <th className="text-left px-6 py-3">Name</th>
                <th className="text-left px-6 py-3">Email</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((user) => (
                  <tr key={user._id} className="border-t hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center px-6 py-6 text-gray-500">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default UsersData;
