import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './user/Home';

import AdminDashboard from './admin/AdminDashboard';
import AddCourse from './admin/AddCourse';
import AllCourses from './admin/AllCourses';
import AuthForm from './components/AuthForm';
import UsersData from './admin/UsersData';
import Cart from './user/Cart';
import AdminOrders from './admin/AdminOrders';
import Courses from './user/Courses';
import Contact from './user/Contact';
import Navbar from './user/Navbar';

// 🧠 Wrapper component to use useLocation
function AppWrapper() {
  const location = useLocation();

  // Agar path /admin se start ho to Navbar hide karo
  const hideNavbar = location.pathname.startsWith('/admin');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/courses" element={<AllCourses />} />
        <Route path="/admin/allcourses" element={<AllCourses />} />
        <Route path="/admin/users" element={<UsersData />} />
        <Route path="/admin/orders" element={<AdminOrders />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
