'use client';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="space-x-4">
            <button className="hover:text-gray-200" onClick={() => alert('Profile clicked!')}>
              Profile
            </button>
            <button className="hover:text-gray-200" onClick={() => alert('Settings clicked!')}>
              Settings
            </button>
            <button
              className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-200"
              onClick={() => alert('Logout clicked!')}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Welcome Back!
        </h2>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-600">Overview</h3>
            <p className="text-gray-600 mt-2">
              View a summary of your account activities and performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-600">Analytics</h3>
            <p className="text-gray-600 mt-2">
              Check the latest insights and trends in your data.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-blue-600">Notifications</h3>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest updates and announcements.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700"
            onClick={() => alert('Action 1 triggered!')}
          >
            Action 1
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-6 py-3 rounded-md font-medium hover:bg-gray-400 ml-4"
            onClick={() => alert('Action 2 triggered!')}
          >
            Action 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
