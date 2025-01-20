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
    <div>
      {error ? (
        <p>{error}</p>
      ) : user ? (
        <div>
          <h1>User Information</h1>
          <p>Name: {user.name}</p>
          <p>Bio: {user.bio}</p>
          <p>Location: {user.location}</p>
          <p>Public Repos: {user.public_repos}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Page;
