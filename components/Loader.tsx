// components/Loader.tsx
'use client';
import React from 'react';
import styles from './Loader.module.css'; 

const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
   
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
