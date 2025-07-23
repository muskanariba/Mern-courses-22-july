import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../user/Navbar";
const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await axios.post("http://localhost:5000/api/auth/login", formData);
        const user = res.data;
        localStorage.setItem("isAdmin", user.isAdmin);
        localStorage.setItem("token", user.token);
        localStorage.setItem("userId", user.user?._id || "");
        user.isAdmin ? navigate("/admin/dashboard") : navigate("/");
      } else {
        await axios.post("http://localhost:5000/api/auth/signup", formData);
        alert("Signup successful. You can now log in.");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Error: " + (error.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
  
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            {isLogin ? "Login to Account" : "Create an Account"}
          </h2>

          {!isLogin && (
            <div className="mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                value={formData.name}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                required
              />
            </div>
          )}

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={formData.email}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={formData.password}
              className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-md hover:bg-yellow-400 transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={toggleForm}
              className="text-yellow-600 font-medium hover:underline ml-1"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </form>
      </div>

      {/* Image Side */}
      <div className="hidden lg:flex w-1/2 bg-yellow-500 items-center justify-center">
        <img
          src="https://i.pinimg.com/1200x/73/6b/6b/736b6bc13a42fb7647976ad16c78b14f.jpg"
          alt="Learning"
          className="max-w-[90%] rounded-xl shadow-2xl"
        />
      </div>
    </div>
  );
};

export default AuthForm;
