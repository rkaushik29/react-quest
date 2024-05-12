import React, { useState } from 'react';

const RandomJokeGenerator = () => {
  const [joke, setJoke] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Failed to fetch joke.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="mb-6">
        <button
          onClick={fetchJoke}
          className="bg-indigo-500 text-white py-2 px-4 rounded-lg shadow-sm hover:bg-indigo-600 transition duration-300"
        >
          Get Random Joke
        </button>
      </div>
      <div className="w-64 h-32 flex items-center justify-center bg-white rounded-lg shadow-lg p-4">
        <p className="text-xl text-gray-700 text-center">{joke}</p>
      </div>
    </div>
  );
};

export default RandomJokeGenerator;
