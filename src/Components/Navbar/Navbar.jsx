'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1
          className="text-2xl font-bold cursor-pointer hover:text-gray-200"
          onClick={() => navigate('/')}
        >
          MyLogo
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6">
          <button
            className="hover:text-gray-200 transition duration-200"
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className="hover:text-gray-200 transition duration-200"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button
            className="hover:text-gray-200 transition duration-200"
            onClick={() => navigate('/signup')}
          >
            Signup
          </button>
          <button
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200 transition duration-200"
            onClick={() => navigate('/dashboard')}
          >
            Dashboad
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
