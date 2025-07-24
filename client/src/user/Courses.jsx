import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/courses')
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Failed to fetch courses', err));
  }, []);

  const handleAddToCart = (course) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Please login or signup first!');
      navigate('/auth');
      return;
    }

    let existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyInCart = existingCart.some((item) => item._id === course._id);
    if (alreadyInCart) {
      alert('You have been successfully enrolled!');
      return;
    }

    existingCart.push({ ...course, status: 'pending', paymentMode: 'COD' });
    localStorage.setItem('cart', JSON.stringify(existingCart));

    alert('Course added to cart');
    navigate('/cart');
  };

  return (
    <div className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
        Explore Our <span className="text-yellow-500">Courses</span>
      </h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition p-4 text-left flex flex-col justify-between min-h-[250px] w-full"
          >
            <div>
              <h3 className="text-xl font-bold text-black mb-1">{course.title}</h3>
              <p className="text-sm text-gray-700 mb-2 line-clamp-2">{course.description}</p>
              <p className="text-yellow-500 font-bold mb-4">Price: ${course.price}</p>
            </div>

            <button
              onClick={() => handleAddToCart(course)}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium w-full py-2 rounded-xl transition"
            >
           Enroll now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
