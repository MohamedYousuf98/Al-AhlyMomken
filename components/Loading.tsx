'use client';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
