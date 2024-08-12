'use client';
import React from 'react';
import styled from 'styled-components';
import { RiCalendarLine, RiMapPinLine } from 'react-icons/ri';

interface Props {
  show: boolean;
  handleClose: () => void;
}

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #ffffff;
  width: 100%;
  max-width: 900px;
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 90vh; /* Max height for mobile */
  overflow-y: auto; /* Enable vertical scrolling */
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 30px;
  }
`;

const PopupImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px;
  margin-top: 15px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const PopupTitle = styled.h3`
  text-align: left;
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
 

  @media (min-width: 768px) {
    text-align: left;
    margin-top: 10px;
    font-size: 17px;
    font-weight: 600;
  }
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const TopTitle = styled.h3`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 30px;
  padding-top: 30px;

  @media (min-width: 768px) {
    text-align: center;
    margin-top: 0;
    font-size: 28px;
    font-weight: 700;
  }
  @media (max-width: 768px) {
    text-align: center;
    margin-top: 0;
    font-size: 23px;
    font-weight: 700;
  }
`;

const EventInfo = styled.p`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
  color:#000000;

  @media (max-width: 768px) {
    font-size:14px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 5px;
  font-size: 17px;
  font-weight: 400;
  color: #000000;
`;

const FormContainer = styled.div`
  margin-top: 20px;
  padding: 30px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  margin-bottom: 15px;
`;

const FormLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight:500;
  color:#111111;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight:400;
  color: #000000;
  border: 1px solid #CFCFCF;
  border-radius: 8px;

  &:focus {
    border: 1px solid #000000; 
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #A0A0A0;
  border: 1px solid #CFCFCF;
  border-radius: 8px;

  &:hover {
    border: 1px solid #000000;
    color:#000000;
  }
  &:focus {
   color:#000000;
  }
 
`;


const SubmitButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #000000;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #000000;
  }
`;
const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 45.5%; 
  background: transparent;
  border: none;
  font-size: 34px;
  cursor: pointer;
  z-index: 10;
`;



const RegisterPopup: React.FC<Props> = ({ show, handleClose }) => {
  return (
    <>
      {show && (
        <ModalBackdrop>
          <ModalContent className="container">
            <div className="row">
              <TopTitle>Register to the event</TopTitle>
              <div className="col-md-6 mt-4">
                <PopupTitle>You are one step away from registering for event: ICCE 2024</PopupTitle>
                <EventInfo>
                  <IconWrapper><RiCalendarLine /></IconWrapper> Date: 2024-07-01
                  <IconWrapper style={{ marginLeft: '20px' }}><RiMapPinLine /></IconWrapper> Location: Some Location
                </EventInfo>
                <PopupImage src="/Popup.jpeg" alt="Event Image" />
              </div>
              <FormContainer className="col-md-6 ">
                <StyledForm>
                  <FormRow>
                    <FormLabel htmlFor="fullName">Full Name</FormLabel>
                    <FormInput type="text" id="fullName" placeholder="Enter your name" />
                  </FormRow>
                  <FormRow>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <FormInput type="email" id="email" placeholder="emailname@example.com" />
                  </FormRow>
                  <FormRow>
                    <FormLabel htmlFor="mobile">Mobile Number</FormLabel>
                    <FormInput type="tel" id="mobile" placeholder="+1(555) 555 555" />
                  </FormRow>
                  <FormRow>
                    <FormLabel htmlFor="country">Select Country*</FormLabel>
                    <FormSelect id="country" defaultValue="">
                      <option value="">Select country</option>
                      <option value="country1">Country 1</option>
                      <option value="country2">Country 2</option>
                      <option value="country3">Country 3</option>
                    </FormSelect>
                  </FormRow>
                  <FormRow>
                    <FormLabel htmlFor="organization">Organization Type*</FormLabel>
                    <FormSelect id="organization" defaultValue="">
                      <option value="">Select entity type</option>
                      <option value="country1">Type 1</option>
                      <option value="country2">Type 2</option>
                      <option value="country3">Type 3</option>
                    </FormSelect>
                  </FormRow>
                  <FormRow>
                    <FormLabel htmlFor="fullOrganizationName">What is the Organization name?</FormLabel>
                    <FormInput type="text" id="fullOrganizationName" placeholder="Organization name FC" />
                  </FormRow>
                  <FormRow>
                    <FormLabel htmlFor="role">What is your role?*</FormLabel>
                    <FormSelect id="role" defaultValue="">
                      <option value="">Select your Role</option>
                      <option value="country1">Role 1</option>
                      <option value="country2">Role 2</option>
                      <option value="country3">Role 3</option>
                    </FormSelect>
                  </FormRow>
                  <SubmitButton type="submit">Submit</SubmitButton>
                </StyledForm>
              </FormContainer>
              <CloseButton onClick={handleClose}>&times;</CloseButton>
            </div>
          </ModalContent>
        </ModalBackdrop>
      )}
    </>
  );
};

export default RegisterPopup;
