// client/src/admin/AdminOrders.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axiosConfig';
import Sidebar from './components/Sidebar';
const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/orders', {
        headers: { Authorization: token }
      });
      const data = await res.json();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <div className="flex min-h-screen  text-black">
      {/* Sidebar */}
       <Sidebar />
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h2 className="text-3xl font-bold mb-6">All Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-300">No orders found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border text-white">
              <thead>
                <tr className="bg-yellow-500 text-black">
                  <th className="p-3 border">User</th>
                  <th className="p-3 border">Courses</th>
                  <th className="p-3 border">Ordered At</th>
                  <th className="p-3 border">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order._id} className="border-t">
                    <td className="p-3 border">{order.userId?.email || 'N/A'}</td>
                    <td className="p-3 border">
                      {order.items.map((item, i) => (
                        <div key={i}>{item.title} - ${item.price}</div>
                      ))}
                    </td>
                    <td className="p-3 border">
                      {new Date(order.orderedAt).toLocaleString()}
                    </td>
                    <td className="p-3 border">
                      {order.isDelivered ? 'Delivered' : 'Pending'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminOrders;
