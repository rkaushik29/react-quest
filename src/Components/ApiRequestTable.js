import React from 'react';

const RequestLog = () => {
  const logEntries = [
    {
      timestamp: 'July 18 - a few seconds ago',
      method: 'POST',
      url: 'sandbox.evervault.com/',
      statusCode: 200,
      duration: '450 ms',
      time: '11:07:45',
      relay: '1/0',
    },
    {
      timestamp: 'July 18 - a few seconds ago',
      method: 'OPTIONS',
      url: 'sandbox.evervault.com/',
      statusCode: 204,
      duration: '288 ms',
      time: '11:07:44',
      relay: '1/0',
    },
    {
      timestamp: 'July 18 - 4 minutes ago',
      method: 'POST',
      url: 'sandbox.evervault.com/',
      statusCode: 200,
      duration: '411 ms',
      time: '11:04:33',
      relay: '1/0',
    },
    {
      timestamp: 'July 18 - 4 minutes ago',
      method: 'OPTIONS',
      url: 'sandbox.evervault.com/',
      statusCode: 204,
      duration: '286 ms',
      time: '11:04:32',
      relay: '1/0',
    },
    {
      timestamp: 'July 18 - 4 minutes ago',
      method: 'OPTIONS',
      url: 'sandbox.evervault.com/',
      statusCode: 204,
      duration: '290 ms',
      time: '11:04:16',
      relay: '1/0',
    },
  ];

  const groupedEntries = logEntries.reduce((acc, entry) => {
    const [date] = entry.timestamp.split(' - ');
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(entry);
    return acc;
  }, {});

  return (
    <div className="bg-white text-gray-800 rounded-md p-4">
      {Object.entries(groupedEntries).map(([date, entries]) => (
        <div key={date} className="mb-4">
          <div className="text-sm font-semibold text-gray-500 mb-2">{date}</div>
          <table className="min-w-full bg-white">
            <tbody>
              {entries.map((entry, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">
                    <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-full">RELAY</span>
                  </td>
                  <td className="py-2">
                    <HiOutlineChevronRight className="inline-block" />
                  </td>
                  <td className="py-2">
                    <span className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">{entry.method}</span>
                  </td>
                  <td className="py-2">
                    <span className="text-blue-500">{entry.url}</span>
                  </td>
                  <td className="py-2">
                    <span className="text-gray-500">{entry.relay}</span>
                  </td>
                  <td className="py-2">
                    <span className="text-gray-500">{entry.time}</span>
                  </td>
                  <td className="py-2">
                    <span className="text-gray-500">{entry.duration}</span>
                  </td>
                  <td className="py-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-md ${entry.statusCode >= 200 && entry.statusCode < 300 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {entry.statusCode}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default RequestLog;
