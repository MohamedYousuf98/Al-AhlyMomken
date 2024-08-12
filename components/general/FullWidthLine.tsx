'use client';
import React from 'react';
import styled from 'styled-components';

// Styled component for the full-width line
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #5D61601A; 
  margin: 50px 0;
`;

// Component
const FullWidthLine: React.FC = () => {
  return <Line />;
};

export default FullWidthLine;
