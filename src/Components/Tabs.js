import React, { useState } from 'react';

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex">
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'tab1' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              } focus:outline-none`}
            onClick={() => setActiveTab('tab1')}
          >
            Tab 1
          </button>
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'tab2' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              } focus:outline-none`}
            onClick={() => setActiveTab('tab2')}
          >
            Tab 2
          </button>
          <button
            className={`flex-1 px-4 py-2 ${activeTab === 'tab3' ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
              } focus:outline-none`}
            onClick={() => setActiveTab('tab3')}
          >
            Tab 3
          </button>
        </div>
        <div className="p-4">
          {activeTab === 'tab1' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Tab 1 Content</h2>
              <p className="text-gray-700 mb-4">This is the content of Tab 1.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li className="text-gray-600">Item 1</li>
                <li className="text-gray-600">Item 2</li>
                <li className="text-gray-600">Item 3</li>
              </ul>
            </div>
          )}
          {activeTab === 'tab2' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Tab 2 Content</h2>
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/50" alt="Placeholder" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-gray-700">John Doe</p>
                  <p className="text-gray-500 text-sm">john.doe@example.com</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">This is the content of Tab 2.</p>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg focus:outline-none hover:bg-indigo-700 transition duration-300">
                Action Button
              </button>
            </div>
          )}
          {activeTab === 'tab3' && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Tab 3 Content</h2>
              <p className="text-gray-700 mb-4">This is the content of Tab 3.</p>
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </div>
                <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg focus:outline-none hover:bg-indigo-700 transition duration-300">
                  Submit
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabbedContent;
