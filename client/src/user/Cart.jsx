import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item._id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handlePlaceOrder = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId'); // Set this at login/signup

    if (!token || !userId) {
      alert('Please login first to place an order.');
      return;
    }

    const orderData = {
      user: userId,
      items: cart.map((item) => ({
        courseId: item._id,
        title: item.title,
        price: item.price,
      })),
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/orders',
        orderData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 201) {
        alert('Order placed successfully!');
        localStorage.removeItem('cart');
        setCart([]);
      }
    } catch (error) {
      console.error('Order failed:', error);
      alert('Order failed. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item) => (
            <li
              key={item._id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <button
                className="text-red-500"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <button
          className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={handlePlaceOrder}
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default Cart;
