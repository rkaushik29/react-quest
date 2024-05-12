import React, { useState } from 'react';

const SidebarLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-200">
      <div className={`fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={() => setIsSidebarOpen(false)}></div>

      <div className={`fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-white overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-center mt-8">
          <div className="text-2xl font-semibold text-gray-700">MyApp</div>
        </div>
        <nav className="mt-10">
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-900" href="#">Dashboard</a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-900" href="#">Profile</a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-900" href="#">Settings</a>
          <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200 hover:text-gray-900" href="#">Logout</a>
        </nav>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
          <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none lg:hidden" onClick={() => setIsSidebarOpen(true)}>
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
            <div className="relative mx-4 lg:mx-0">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <svg className="h-5 w-5 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M21 21l-6-6m2-5A7 7 0 1011 3a7 7 0 006 7z"></path>
                </svg>
              </span>
              <input className="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text" placeholder="Search" />
            </div>
          </div>
          <div className="flex items-center">
            <button className="flex text-gray-500 focus:outline-none mx-4">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3c0 .575-.188 1.1-.595 1.595L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"></path>
              </svg>
            </button>
            <div className="relative">
              <button className="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                <img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=32&q=80" alt="User" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-20">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Profile</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Settings</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-600 hover:text-white">Logout</a>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <div className="mt-4">
              <div className="flex flex-wrap -mx-6">
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-700 text-lg font-semibold">Total Sales</h4>
                        <p className="mt-2 text-gray-600">124</p>
                      </div>
                      <div className="bg-green-500 p-3 rounded-full text-white">
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M3 10h11M3 6h11m-6 8h6"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-700 text-lg font-semibold">New Users</h4>
                        <p className="mt-2 text-gray-600">43</p>
                      </div>
                      <div className="bg-blue-500 p-3 rounded-full text-white">
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M15 12H9m6-4H9m6 8H9m6 4H9"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full px-6 sm:w-1/2 xl:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-gray-700 text-lg font-semibold">Total Orders</h4>
                        <p className="mt-2 text-gray-600">34</p>
                      </div>
                      <div className="bg-red-500 p-3 rounded-full text-white">
                        <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M3 7h18M3 12h18m-9 5h9"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SidebarLayout;
