'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';

const Page = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://api.github.com/users/${id}`)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
          setError('User not found'); 
        });
    }
  }, [id]); 

  return (
    <div className="max-w-3xl mx-auto p-6">
      {error ? (
        <p className="text-center text-xl text-red-500">{error}</p>
      ) : user ? (
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">User Information</h1>
          <div className="space-y-4">
            <p className="text-xl text-gray-700"><strong>ID:</strong> {user.id}</p>
            <p className="text-xl text-gray-700"><strong>Username:</strong> {user.login}</p>
            <p className="text-xl text-gray-700"><strong>Type:</strong> {user.type}</p>
            <p className="text-xl text-gray-700"><strong>Node:</strong> {user.node_id}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Page;
