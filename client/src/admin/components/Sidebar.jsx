import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-yellow-500">Admin Panel</h1>

        {/* Hamburger for small screens */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links for medium and large screens */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <a href="/admin/dashboard" className="hover:text-yellow-500 transition">Dashboard</a>
          <a href="/admin/users" className="hover:text-yellow-500 transition">Users</a>
          <a href="/admin/add-course" className="hover:text-yellow-500 transition">Add Course</a>
          <a href="/admin/allcourses" className="hover:text-yellow-500 transition">All Courses</a>
          <a href="/home" className="hover:text-yellow-500 transition">Logout</a>
        </nav>
      </div>

      {/* Dropdown menu for small screens */}
      {isOpen && (
        <nav className="md:hidden mt-4 flex flex-col space-y-4 text-lg px-4">
          <a href="/admin/dashboard" className="hover:text-yellow-500 transition">Dashboard</a>
          <a href="/admin/users" className="hover:text-yellow-500 transition">Users</a>
          <a href="/admin/add-course" className="hover:text-yellow-500 transition">Add Course</a>
          <a href="/admin/allcourses" className="hover:text-yellow-500 transition">All Courses</a>
          <a href="/home" className="hover:text-yellow-500 transition">Logout</a>
        </nav>
      )}
    </header>
  );
};

export default Sidebar;
