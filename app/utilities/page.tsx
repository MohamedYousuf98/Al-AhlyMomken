'use client';
import 'normalize.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/general/Navbar'; 
import ReadyOnline from '@/components/general/ReadyOnline'; 
import OurPartnerSlider from '@/components/sliders/OurPartnerSlider';
import Footer from '@/components/general/Footer'; 
import Utilities from '@/components/Utilities';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  background-image: url('/government.webp');
  background-size: cover; 
  background-position: center;
`;

const About: React.FC = () => {
  return (
    <div>
        <BodyWrapper>
       <Navbar />
      <Utilities />
      <ReadyOnline />
      <OurPartnerSlider />
      <Footer />
      </BodyWrapper>
    </div>
  );
};

export default About;
