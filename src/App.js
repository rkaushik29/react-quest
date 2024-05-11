import React from 'react';
import ApplicationCard from './Components/ApplicantStatus';
import RequestLog from './Components/ApiRequestTable';

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <RequestLog />
    </div>
  );
}

export default App;
