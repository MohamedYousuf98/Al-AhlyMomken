// GetStartedButton.tsx
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #00816D;
  color: white;
  padding: 14px 20px;
  border-radius: 64px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;

  svg {
    margin-left: 7px;
  }
`;

interface GetStartedButtonProps {
  href: string;
  children: React.ReactNode;
}

const GetStartedButton: React.FC<GetStartedButtonProps> = ({ href, children }) => {
  return (
    <ButtonContainer>
      <StyledButton href={href}>
        {children}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.58398 7.9987H14.4173M14.4173 7.9987L8.00065 1.58203M14.4173 7.9987L8.00065 14.4154"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StyledButton>
    </ButtonContainer>
  );
};

export default GetStartedButton;
