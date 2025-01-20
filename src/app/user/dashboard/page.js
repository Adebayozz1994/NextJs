'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
   
    return <p>Loading users...</p>;
  }

  if (error) {
   
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      {users.map((user) => (
        <div key={user.id}>
            <p>{user.id}</p>
          <p>{user.login}</p> 
          <p>{user.html_url}</p>
          <p>{user.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
