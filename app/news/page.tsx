'use client';
import 'normalize.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/general/Navbar'; 
import ReadyOnline from '@/components/general/ReadyOnline'; 
import News from '@/components//News';
import Footer from '@/components/general/Footer'; 
import Subscribe from '@/components/general/Subscribe';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  background-image: url('/News-bg.webp');
  background-size: cover; 
  background-position: center;
`;

const About: React.FC = () => {
  return (
    <div>
      <BodyWrapper>
      <Navbar />
      <Subscribe title="News & <br /> <span style='color:  #00816D;'>insights</span>" />
      
      <News />
      <ReadyOnline />
      <Footer />
      </BodyWrapper>
    </div>
  );
};

export default About;
