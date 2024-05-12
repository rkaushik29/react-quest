import React, { useState } from 'react';

const images = [
  'https://source.unsplash.com/random/1600x900?nature,1',
  'https://source.unsplash.com/random/1600x900?nature,2',
  'https://source.unsplash.com/random/1600x900?nature,3',
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-screen flex items-center justify-center bg-gray-900">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Welcome to Our Website</h1>
        <p className="mt-4 text-lg md:text-xl">We are here to provide you the best service</p>
        <div className="mt-6 flex justify-center space-x-4">
          <a href="#" className="inline-block bg-indigo-500 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-600 transition duration-300">Get Started</a>
          <a href="#" className="inline-block bg-transparent border border-white text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-500 transition duration-300">Learn More</a>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Feature One</h3>
            <p className="mt-2">Description of the first feature that is offered by the website.</p>
          </div>
          <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Feature Two</h3>
            <p className="mt-2">Description of the second feature that is offered by the website.</p>
          </div>
          <div className="bg-white bg-opacity-25 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Feature Three</h3>
            <p className="mt-2">Description of the third feature that is offered by the website.</p>
          </div>
        </div>
      </div>
      {/* Carousel Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button onClick={prevSlide} className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-full p-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button onClick={nextSlide} className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-full p-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
