import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      alert("Please login first!");
      window.location.href = '/auth';
      return;
    }

    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, [token]);

  const handleEnroll = () => {
    alert("You have been successfully enrolled!");
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-white text-white px-4 py-8">
      <h2 className="text-3xl font-bold text-black text-center mb-8">Your Enrolled Courses</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-400 text-lg">You haven't enrolled in any courses yet.</p>
      ) : (
        <>
          {/* 🛍 Enrolled Courses List */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {cartItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white text-black rounded-xl shadow-md p-5 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-yellow-600">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
                <div className="mt-2 flex justify-between text-sm font-medium">
                  <span>Price: ${item.price}</span>
                  <span className="text-green-600">Status: Enrolled</span>
                </div>
              </div>
            ))}
          </div>

          {/* 📋 Summary Table */}
          <div className="mt-10 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Enrollment Summary</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white text-black rounded-xl shadow-sm">
                <thead className="bg-yellow-500 text-white text-left">
                  <tr>
                    <th className="py-2 px-4">#</th>
                    <th className="py-2 px-4">Course</th>
                    <th className="py-2 px-4">Price</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, idx) => (
                    <tr key={idx} className="border-b">
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{item.title}</td>
                      <td className="py-2 px-4">${item.price}</td>
                      <td className="py-2 px-4 text-green-600">Enrolled</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 🎉 Enroll Button */}
          <div className="text-center mt-8">
            <button
              onClick={handleEnroll}
              className="bg-yellow-500 text-black font-semibold px-6 py-2 rounded-xl hover:bg-yellow-600 transition"
            >
              Confirm Enrollment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
