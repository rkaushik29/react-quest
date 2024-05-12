import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-indigo-600 text-white p-4">
        <h1 className="text-2xl">Dashboard</h1>
      </header>
      <div className="flex flex-grow">
        <aside className="bg-gray-800 text-gray-200 w-64 min-h-screen flex flex-col">
          <nav className="flex-grow">
            <ul className="flex flex-col space-y-2 p-4">
              <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Dashboard</a></li>
              <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Profile</a></li>
              <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Settings</a></li>
              <li><a href="#" className="block p-2 rounded hover:bg-gray-700">Logout</a></li>
            </ul>
          </nav>
          <div className="p-4">
            <p className="text-sm">Sidebar content or footer</p>
          </div>
        </aside>
        <main className="flex-grow bg-gray-100 p-6">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4 mb-6">
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                  <div className="bg-indigo-500 text-white p-3 rounded-full mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.623 0 4.738-2.01 4.938-4.615.02-.267.02-.532.02-.785C16.937 2.817 14.12 0 10.468 0 6.817 0 4 2.817 4 6.6c0 3.784 2.817 6.6 6.6 6.6 1.222 0 2.367-.292 3.4-.805-.133.165-.273.327-.415.482C12.69 14.73 11 16.5 11 18.5v2.5h6v-2.5c0-3.418 2.067-5.645 5.6-5.645 2.354 0 4.29 1.592 4.755 3.832C23.999 17.957 24 18.222 24 18.5V20c0 1.105-.895 2-2 2H5a5 5 0 01-5-5v-3c0-1.658 1.343-3 3-3h.91c1.167-.362 2.168-1.136 2.872-2.217a9.104 9.104 0 011.106-1.45c.663-.737 1.26-1.444 1.674-2.068.312-.473.574-.96.774-1.452A8.954 8.954 0 0012 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Total Sales</h2>
                    <p className="text-gray-700">12345</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                  <div className="bg-blue-500 text-white p-3 rounded-full mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.623 0 4.738-2.01 4.938-4.615.02-.267.02-.532.02-.785C16.937 2.817 14.12 0 10.468 0 6.817 0 4 2.817 4 6.6c0 3.784 2.817 6.6 6.6 6.6 1.222 0 2.367-.292 3.4-.805-.133.165-.273.327-.415.482C12.69 14.73 11 16.5 11 18.5v2.5h6v-2.5c0-3.418 2.067-5.645 5.6-5.645 2.354 0 4.29 1.592 4.755 3.832C23.999 17.957 24 18.222 24 18.5V20c0 1.105-.895 2-2 2H5a5 5 0 01-5-5v-3c0-1.658 1.343-3 3-3h.91c1.167-.362 2.168-1.136 2.872-2.217a9.104 9.104 0 011.106-1.45c.663-.737 1.26-1.444 1.674-2.068.312-.473.574-.96.774-1.452A8.954 8.954 0 0012 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">New Users</h2>
                    <p className="text-gray-700">543</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                  <div className="bg-green-500 text-white p-3 rounded-full mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.623 0 4.738-2.01 4.938-4.615.02-.267.02-.532.02-.785C16.937 2.817 14.12 0 10.468 0 6.817 0 4 2.817 4 6.6c0 3.784 2.817 6.6 6.6 6.6 1.222 0 2.367-.292 3.4-.805-.133.165-.273.327-.415.482C12.69 14.73 11 16.5 11 18.5v2.5h6v-2.5c0-3.418 2.067-5.645 5.6-5.645 2.354 0 4.29 1.592 4.755 3.832C23.999 17.957 24 18.222 24 18.5V20c0 1.105-.895 2-2 2H5a5 5 0 01-5-5v-3c0-1.658 1.343-3 3-3h.91c1.167-.362 2.168-1.136 2.872-2.217a9.104 9.104 0 011.106-1.45c.663-.737 1.26-1.444 1.674-2.068.312-.473.574-.96.774-1.452A8.954 8.954 0 0012 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Total Orders</h2>
                    <p className="text-gray-700">9876</p>
                  </div>
                </div>
              </div>
              <div className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-4">
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-center">
                  <div className="bg-red-500 text-white p-3 rounded-full mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12c2.623 0 4.738-2.01 4.938-4.615.02-.267.02-.532.02-.785C16.937 2.817 14.12 0 10.468 0 6.817 0 4 2.817 4 6.6c0 3.784 2.817 6.6 6.6 6.6 1.222 0 2.367-.292 3.4-.805-.133.165-.273.327-.415.482C12.69 14.73 11 16.5 11 18.5v2.5h6v-2.5c0-3.418 2.067-5.645 5.6-5.645 2.354 0 4.29 1.592 4.755 3.832C23.999 17.957 24 18.222 24 18.5V20c0 1.105-.895 2-2 2H5a5 5 0 01-5-5v-3c0-1.658 1.343-3 3-3h.91c1.167-.362 2.168-1.136 2.872-2.217a9.104 9.104 0 011.106-1.45c.663-.737 1.26-1.444 1.674-2.068.312-.473.574-.96.774-1.452A8.954 8.954 0 0012 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">Pending Tasks</h2>
                    <p className="text-gray-700">45</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-2">Sales Chart</h2>
              <img src="https://via.placeholder.com/800x400" alt="Chart" className="w-full rounded-lg" />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-2">Recent Orders</h2>
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">#12345</td>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">$123.45</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">#12346</td>
                    <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
                    <td className="px-6 py-4 whitespace-nowrap">$543.21</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap">#12347</td>
                    <td className="px-6 py-4 whitespace-nowrap">Alice Johnson</td>
                    <td className="px-6 py-4 whitespace-nowrap">$678.90</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Cancelled</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-indigo-600 text-white p-4 text-center">
        © 2024 Your Company
      </footer>
    </div>
  );
};

export default Dashboard;
