import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';

const AddCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Only sending text fields — no image
      const data = { title, description, price };

      const res = await axios.post('http://localhost:5000/api/courses', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      setMessage('Course added successfully!');
      setTitle('');
      setDescription('');
      setPrice('');
    } catch (error) {
      setMessage('Error adding course.');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="max-w-xl bg-white p-6 rounded-lg shadow-md mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Add New Course</h2>
          {message && <p className="mb-4 text-green-600">{message}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Price:</label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
      
            <button
              type="submit"
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition duration-200"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
