'use client';

import 'normalize.css';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import styled from 'styled-components';
import ContactUs from '@/components/ContactUs';
import Navbar from '@/components/general/Navbar'; 
import ReadyOnline from '@/components/general/ReadyOnline'; 
import Footer from '@/components/general/Footer'; 

const BodyWrapper = styled.div`
  background-size: cover; 
  background-position: center;
`;

const About: React.FC = () => {
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await axios.get('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/contact-us', {
          headers: {
            'Accept-Language': 'en',
          },
        });
        setContactData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch contact data', error);
      }
    };

    fetchContactData();
  }, []);

  return (
    <BodyWrapper>
     <Navbar /> 
      {contactData ? <ContactUs contactData={contactData} /> : <p></p>}
      <Footer /> 
    </BodyWrapper>
  );
};

export default About;
