import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';// ✅ Import the sidebar

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses');
        setCourses(res.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`);
      setCourses(prev => prev.filter(course => course._id !== id));
      setMessage('Course deleted successfully!');
    } catch (error) {
      console.error('Error deleting course:', error);
      setMessage('Error deleting course.');
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar /> {/* ✅ Replaced hardcoded sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-4">All Courses</h2>

        {message && <div className="mb-4 text-green-600 font-medium">{message}</div>}

        {courses.length === 0 ? (
          <p className="text-gray-600">No courses found.</p>
        ) : (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map(course => (
              <li key={course._id} className="bg-white shadow p-4 rounded-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <p className="text-gray-700 mb-2">{course.description}</p>
                <p className="mb-3"><strong>Price:</strong> ${course.price}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                  <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400">
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
