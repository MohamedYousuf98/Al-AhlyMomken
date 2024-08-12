// BusinessButton.tsx
import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px 20px;
  border-radius: 20px;
  border: none; 
 margin-bottom:20px;

  &:hover {
    color: #ffffff;
  }
`;

const BusinessButton: React.FC = () => {
  return (
    <Button>
      For Business
    </Button>
  );
};

export default BusinessButton;
