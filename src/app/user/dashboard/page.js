'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios
      .get('https://api.github.com/users')
      .then((response) => {
        setUsers(response.data); 
        setLoading(false); 
      })
      .catch((error) => {
        setError('Failed to fetch users.');
        setLoading(false); 
        console.error(error); 
      });
  }, []);

  if (loading) {
    return <p className="text-center text-xl font-semibold">Loading users...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Link href={`/user/dashboard/${user.id}`}>
              <div className="block p-6 hover:bg-gray-100">
                <div className="text-center">
                  <p className="text-xl font-semibold text-gray-800">{user.login}</p>
                  <p className="text-gray-500">ID: {user.id}</p>
                  <p className="text-gray-600">Type: {user.type}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
