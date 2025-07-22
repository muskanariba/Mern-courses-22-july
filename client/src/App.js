import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './user/Home';

import AdminDashboard from './admin/AdminDashboard'
import AddCourse from './admin/AddCourse'
import AllCourses from './admin/AllCourses';
import AuthForm from './components/AuthForm';
import UsersData from './admin/UsersData'
import Cart from './user/Cart';
import AdminOrders from './admin/AdminOrders';
import Courses from './user/Courses';
// In App.jsx or wherever you handle routes




function App() {
  return (
    <Router>
      <Routes>


        
        <Route path="/" element={<Home />} />
     
        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/add-course" element={<AddCourse />} />
        <Route path="/admin/courses" element={<AllCourses />} />
        <Route path="/admin/allcourses" element={<AllCourses />} />
        <Route  path="/admin/users" element={<UsersData />}/>
          <Route  path="/admin/orders" element={<AdminOrders/>}/>
          <Route path="/login" element={<AuthForm />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/cart" element={<Cart />} />


      </Routes>
    </Router>
  );
}

export default App;
