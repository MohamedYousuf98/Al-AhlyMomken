"use client";
// pages/about.tsx
import { getPodcastinner } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import PodinnerPage from '@/components/PodinnerPage';
import ReadyOnline from '@/components/general/ReadyOnline';
import Navbar from '@/components/general/Navbar';
import Footer from '@/components/general/Footer';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  background-image: url('/article-bg.webp');
  background-size: cover;
  background-position: center;
`;

const About: React.FC = () => {
  const [Podcastinner, setPodcastinner] = useState<any>(null);

  useEffect(() => {
    const fetchPodcastinner = async () => {
      try {
        const data = await getPodcastinner();
        console.log('Fetched data:', data);

        if (data && data.data && data.data.podcasts.length > 0) {
          
          setPodcastinner(data.data.podcasts[0]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchPodcastinner();
  }, []);


  
  
  return (
    <BodyWrapper>
      <Navbar/>
      {Podcastinner ? <PodinnerPage Podcastinner={Podcastinner} /> : <p></p>}
      <ReadyOnline />
      <Footer />
    </BodyWrapper>
  );
};

export default About;
