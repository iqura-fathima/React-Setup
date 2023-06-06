import React from 'react';
import Form from './Form';
import './index.css';

function App() {
  return (
    <div>
      <style>
        {`
          body {
            background-color: #F0F4F8;
          }
        `}
      </style>
      <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 text-center">
          Simple Webpage
          </h1>
        <Form />
      </div>
    </div>
  );
}

export default App;
