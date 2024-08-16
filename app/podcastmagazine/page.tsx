'use client';
import 'normalize.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/general/Navbar'; 
import ReadyOnline from '@/components/general/ReadyOnline'; 
import News from '@/components//News';
import Footer from '@/components/general/Footer'; 
import Subscribe from '@/components/general/Subscribe';
import FullWidthLine from '@/components/general/FullWidthLine';
import styled from 'styled-components';
import PodcastSection from '@/components/PodcastSection';
import MagazineSection from '@/components/MagazineSection';

const BodyWrapper = styled.div`
  background-image: url('/Podcast-magazine-bg.webp');
  background-size: cover; 
  background-position: center;
`;

const About: React.FC = () => {
  return (
    <div>
      <BodyWrapper>
      <Navbar />
      <Subscribe title={`Podcasts & <br /> <span style="color: #00816D;">Magazines</span>`}/>
      <PodcastSection />
      <FullWidthLine />
      <MagazineSection />
      <ReadyOnline />
      <Footer />
      </BodyWrapper>
    </div>
  );
};

export default About;
