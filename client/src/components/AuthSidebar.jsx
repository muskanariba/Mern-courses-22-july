import React from 'react';

const AuthSidebar = () => {
  return (
    <div className="hidden lg:flex flex-col justify-center items-center w-1/3 bg-yellow-500 text-black p-8 rounded-l-2xl shadow-xl">
      <h1 className="text-4xl font-bold mb-4">CoursePlatform</h1>
      <p className="text-base text-center leading-relaxed">
        Learn. Grow. Succeed. <br />
        Start your journey with our handpicked courses today!
      </p>
    </div>
  );
};

export default AuthSidebar;
