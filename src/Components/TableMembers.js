import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const TeamMembersSection = () => {
  const [activeTab, setActiveTab] = useState('Members');

  const tabs = [
    'General',
    'Members',
    'Theme',
    'Access & Privacy',
    'Billing & Plans',
    'Integrations',
  ];

  const membersData = [
    { name: 'Alice', email: 'alice@nicelydone.club', role: 'Member (pending)', avatar: 'A' },
    { name: 'Jo', email: 'jo@nicelydone.club', role: 'Member (pending)', avatar: 'J' },
    { name: 'Bertrand Nicelydone', email: 'nicelydoneproducts@gmail.com', role: 'Admin', avatar: 'https://via.placeholder.com/32' },
  ];

  return (
    <div className="bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <div className="bg-gray-200 text-gray-800 rounded-md h-10 w-10 flex items-center justify-center mr-6">
            B
          </div>
          <h2 className="text-lg font-semibold">Bertrand's Team</h2>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Invite</button>
      </div>

      <div className="border-b border-gray-200">
        <div className="flex space-x-6 px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`py-2 text-sm ${
                activeTab === tab
                  ? 'text-black font-semibold border-b-2 border-blue-500'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab} {tab === 'Members' && activeTab === 'Members' && (
                <span className="ml-1 bg-blue-500 text-white text-xs rounded-full px-2">3</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'Members' ? (
        <div className="px-4 mt-3 py-2">
          <div className="flex items-center justify-between mb-2 text-sm font-medium text-gray-700">
            <div className="w-1/4 text-left">Name</div>
            <div className="w-1/4 text-left">Email</div>
            <div className="w-1/4 text-left">Role</div>
            <div className="w-1/4"></div>
          </div>
          {membersData.map((member, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-t border-gray-200">
              <div className="flex items-center w-1/4">
                <div className={`bg-gray-400 text-white rounded-md h-10 w-10 flex items-center justify-center mr-2 ${member.avatar.startsWith('http') ? 'p-0' : 'p-2'}`}>
                  {member.avatar.startsWith('http') ? (
                    <img
                      src={member.avatar}
                      alt="User Avatar"
                      className="rounded-full"
                    />
                  ) : (
                    member.avatar
                  )}
                </div>
                <div className="font-medium text-left">{member.name}</div>
              </div>
              <div className="w-1/4 text-left">{member.email}</div>
              <div className="w-1/4 text-left">{member.role}</div>
              <div className="w-1/4 text-gray-500 cursor-pointer flex justify-end">
                <FaEllipsisV />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-4"></div>
      )}
    </div>
  );
};

export default TeamMembersSection;
