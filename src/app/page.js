import { useClientEffect } from 'react-universal-hooks';
import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');

  useClientEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setName(data.name);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Home;
