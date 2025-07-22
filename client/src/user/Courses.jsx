import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/courses')
      .then(res => setCourses(res.data))
      .catch(err => console.error('Failed to fetch courses', err));
  }, []);

  const handleAddToCart = (course) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login or signup first!');
      navigate('/auth');
      return;
    }

    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    existingCart.push(course);
    localStorage.setItem('cart', JSON.stringify(existingCart));

    navigate('/cart');
  };

  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
        Explore Our <span className="text-yellow-500">Courses</span>
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map(course => (
          <div
            key={course._id}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition"
          >
            <img
              src={course.image || 'https://via.placeholder.com/250x150'}
              alt={course.title}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">{course.title}</h3>
            <p className="text-sm text-gray-600 mb-3">{course.description}</p>
            <p className="text-black font-bold mb-4">Price: Rs. {course.price}</p>
            <button
              onClick={() => handleAddToCart(course)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-md transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
