import React from 'react';

const ApplicationCard = () => {
  return (
    <div className="min-h-screen bg-[#f5f5dc] p-4">
      <div className="flex w-full">
        <div className="w-1/3 p-4">
          <div className="text-sm font-semibold mb-2">Application <span className="text-gray-500">1</span></div>
          <div className="bg-white p-4 rounded-2xl shadow-md">
            <div className="flex items-center">
              <div className="bg-red-400 h-10 w-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold">Anna Me</h3>
                <p className="text-gray-500 text-sm">Sourced today</p>
              </div>
            </div>
            <button className="bg-blue-500 text-xs text-white px-3 py-1 mt-4 rounded-2xl">Review</button>
          </div>
        </div>
        <div className="border-r border-gray-300"></div>

        {/* Other Columns */}
        <div className="w-1/6 p-4">
          <div className="text-sm font-semibold mb-2">Qualified <span className="text-gray-500">0</span></div>
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="w-1/6 p-4">
          <div className="text-sm font-semibold mb-2">Interview <span className="text-gray-500">0</span></div>
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="w-1/6 p-4">
          <div className="text-sm font-semibold mb-2">Offer <span className="text-gray-500">0</span></div>
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="w-1/6 p-4">
          <div className="text-sm font-semibold mb-2">Hired <span className="text-gray-500">0</span></div>
        </div>
        <div className="border-r border-gray-300"></div>
        <div className="w-1/6 p-4">
          <div className="text-sm font-semibold mb-2">Disqualified <span className="text-gray-500">0</span></div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationCard;
