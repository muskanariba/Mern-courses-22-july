import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        // localStorage.setItem("token", user.token);
        localStorage.setItem("isAdmin", user.isAdmin);
        localStorage.setItem('token', res.data.token);
       localStorage.setItem('userId', user.user?._id || '');



        if (user.isAdmin) {
          navigate("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        await axios.post("http://localhost:5000/api/auth/signup", formData);
        alert("Signup successful. You can now log in.");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Error: " + error.response.data.message || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg p-8 rounded w-96">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? "Login" : "Sign Up"}</h2>
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
            className="w-full border p-2 mb-3"
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          className="w-full border p-2 mb-3"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          className="w-full border p-2 mb-3"
          required
        />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p className="mt-3 text-sm text-center">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button type="button" onClick={toggleForm} className="text-blue-600 ml-1">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthForm;
