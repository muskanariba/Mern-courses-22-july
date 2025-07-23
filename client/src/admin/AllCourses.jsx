import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar'; // ✅ Admin Sidebar

const AllCourses = () => {
  const [courses, setCourses] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/courses');
      setCourses(res.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/courses/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setCourses(prev => prev.filter(course => course._id !== id));
      setMessage('✅ Course deleted successfully!');
    } catch (error) {
      console.error('❌ Error deleting course:', error);
      setMessage('❌ Error deleting course.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Sidebar/> {/* Sidebar ki jagah ab top navbar */}
      <div className="flex-1 p-6 bg-white text-black rounded-tl-3xl shadow-inner">
        <h2 className="text-3xl font-bold mb-6 border-b pb-2">All Courses</h2>

        {message && (
          <div className="mb-4 text-green-600 font-semibold">{message}</div>
        )}

        {courses.length === 0 ? (
          <p className="text-gray-600">No courses found.</p>
        ) : (
          <div className="space-y-6">
            {courses.map((course) => (
              <div
                key={course._id}
                className="flex items-center bg-gray-100 p-4 rounded-xl shadow border border-gray-300"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-32 h-20 object-cover rounded mr-4 border border-white"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.description}</p>
                  <p className="font-medium mt-1">
                    <span className="text-gray-600">Price:</span> ${course.price}
                  </p>
                </div>
                <div className="flex space-x-2 ml-4">
                  <button
                    onClick={() => handleDelete(course._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
              
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
