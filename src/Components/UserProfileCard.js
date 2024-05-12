import React from 'react';

const UserProfileCard = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-cover bg-center h-40" style={{ backgroundImage: 'url(https://source.unsplash.com/random/800x600)' }}></div>
      <div className="p-6">
        <div className="flex items-center">
          <img className="h-24 w-24 rounded-full object-cover -mt-12 border-4 border-white" src="https://source.unsplash.com/random/100x100" alt="User Avatar" />
          <div className="ml-4">
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-600">johndoe@example.com</p>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">About Me</h3>
          <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">Social Media</h3>
          <div className="mt-2 flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.36 6.64a9 9 0 11-12.72 0c-3.51-3.51 1.92-8.94 5.43-5.43a9 9 0 017.29 5.43zm-6.72 8.27h1.36v1.36H11.64v-1.36h-1.36v-1.36h1.36v-1.36h1.36v1.36h1.36v1.36H11.64zm2.73-5.27c0-1.13-.91-2.04-2.04-2.04s-2.04.91-2.04 2.04.91 2.04 2.04 2.04 2.04-.91 2.04-2.04zm-1.36 0a.68.68 0 11-1.36 0 .68.68 0 011.36 0z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 4.01c-.81.36-1.68.6-2.58.7.93-.56 1.64-1.45 1.98-2.51-.87.52-1.83.9-2.85 1.1-.82-.87-2-1.4-3.3-1.4-2.5 0-4.49 2.02-4.49 4.49 0 .35.04.69.12 1.02C7.69 7.1 4.07 5.13 1.64 2.04c-.38.65-.6 1.4-.6 2.2 0 1.53.78 2.88 1.97 3.67-.73-.02-1.42-.22-2.02-.55v.06c0 2.14 1.52 3.93 3.54 4.33-.37.1-.77.15-1.18.15-.29 0-.57-.03-.85-.08.58 1.82 2.27 3.15 4.27 3.19-1.57 1.23-3.54 1.97-5.68 1.97-.37 0-.73-.02-1.09-.06 2.03 1.3 4.45 2.05 7.04 2.05 8.45 0 13.08-7 13.08-13.08 0-.2 0-.4-.01-.6.9-.65 1.67-1.48 2.28-2.42z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-indigo-600">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 12.3c0-5.58-4.5-10.08-10.08-10.08S2.84 6.72 2.84 12.3c0 4.93 3.46 9.04 8 9.92v-7.02h-2.4v-2.9h2.4V9.52c0-2.41 1.45-3.74 3.63-3.74 1.04 0 1.93.08 2.19.11v2.54h-1.51c-1.18 0-1.41.56-1.41 1.39v1.82h2.8l-.36 2.9h-2.44v7.02c4.53-.88 8-4.99 8-9.92z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
