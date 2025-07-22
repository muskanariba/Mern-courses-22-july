import React from "react";

const About = () => {
  return (
    <div className="bg-white py-12 px-4 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image on Left */}
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/1200x/63/fd/42/63fd420bb2ae4b275709e4bcdae2e556.jpg"
            alt="About Us"
            className="rounded-2xl shadow-lg w-full h-auto max-h-[350px] object-cover"
          />
        </div>

        {/* Text on Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-yellow-500">CoursePlatform</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to <span className="text-yellow-500 font-semibold">CoursePlatform</span>! We’re committed to delivering top-quality education through interactive and practical learning experiences tailored to your growth.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're just starting out or upgrading your skills, our mission is to make learning easy, enjoyable, and accessible for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
