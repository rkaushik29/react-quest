import React, { useState } from 'react';

const ExpandableCard = ({ title, content, image }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-gray-200">
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded ? 'w-1/2 h-1/2' : 'w-32 h-32'
        } bg-white border rounded-lg shadow-lg transition-all duration-300 overflow-hidden cursor-pointer`}
      >
        {isExpanded ? (
          <div className="p-4">
            <img src={image} alt="Placeholder" className="w-full h-1/4 object-cover rounded-t-lg" />
            <h2 className="mt-4 text-xl font-bold">{title}</h2>
            <p className="mt-2">{content}</p>
          </div>
        ) : (
          <div className="flex justify-center items-center h-full">
            <span className="text-4xl">?</span>
          </div>
        )}
      </div>
    </div>
  );
};

const App = () => {
  const cards = [
    {
      title: 'Card 1',
      content: 'This is the first card. It contains some interesting text and a nice image.',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 2',
      content: 'This is the second card. It has some different content and another image.',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Card 3',
      content: 'This is the third card. It also has some content and an image.',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <div className="flex space-x-4 justify-center items-center bg-gray-200 h-screen">
      {cards.map((card, index) => (
        <ExpandableCard
          key={index}
          title={card.title}
          content={card.content}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default App;
