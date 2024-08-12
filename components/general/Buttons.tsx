import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 35px;
`;

const Button = styled.button`
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 500;
  padding: 15px 27px;

  &:first-child {
    background-color: #fff;
    color: #003830;
  }

  &:first-child:hover {
    color: #FDB615;
    border: 2px solid #FDB615;
  }
  &:last-child {
    background-color: transparent;
    color: #ffffff;
    border: 2px solid var(--White, #FFFFFF);
  }
  &:last-child:hover {
    color: #FDB615;
    border: 2px solid #FDB615;
  }
`;

interface ButtonsProps {
  onGetStarted: () => void;
  onContactUs: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onGetStarted, onContactUs }) => {
  return (
    <ButtonsContainer>
      <Button onClick={onGetStarted}>Get Started</Button>
      <Button onClick={onContactUs}>Contact Us</Button>
    </ButtonsContainer>
  );
};

export default Buttons;
