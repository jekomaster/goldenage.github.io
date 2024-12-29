import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Ensure App is the root component

const AppWrapper = () => {
  return (
    <div>
      <App />
    </div>
  );
};

// This will ensure the React app is hydrated in the client
if (typeof window !== 'undefined') {
  ReactDOM.hydrate(
    <AppWrapper />,
    document.getElementById('react-root')
  );
}

export default AppWrapper;
