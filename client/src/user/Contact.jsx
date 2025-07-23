import React from "react";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-20">
       
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
            Contact <span className="text-yellow-500">Us</span>
          </h2>
          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <button
              type="submit"
              className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-yellow-600 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/736x/e7/f5/dc/e7f5dc8da0ed66f1c90d04be303166ae.jpg"
            alt="Contact Illustration"
            className="rounded-2xl shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
