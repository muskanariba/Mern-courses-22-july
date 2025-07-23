import React from "react";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import Navbar from "./Navbar"
const Home = () => {
  return (
    <div className="font-sans bg-gray-100">
      

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-24 md:h-[90vh] bg-white">
        {/* Left Text */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <p className="text-yellow-500 text-base uppercase tracking-wider">
            Learn From Experts
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black leading-tight">
            Welcome to <span className="text-yellow-500">CoursePlatform</span>
          </h1>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Your gateway to learning and growth. Explore a variety of practical and professional courses designed to help you upgrade your skills, grow your career, and boost your confidence.
          </p>
          <div>
            <a
              href="/courses"
              className="inline-block bg-yellow-500 text-black px-7 py-3 rounded-full font-semibold hover:bg-yellow-600 transition duration-300 shadow-md"
            >
              Explore Courses
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            src="https://i.pinimg.com/736x/95/41/03/954103761f723c8818727adbda94f01b.jpg"
            alt="Main Home"
            className="w-full h-auto max-w-[300px] rounded-2xl shadow-xl hover:scale-105 transition duration-300"
          />
        </div>
      </section>

      {/* Sections */}
      <About />
      <Courses />
      <Contact/>
    </div>
  );
};

export default Home;
