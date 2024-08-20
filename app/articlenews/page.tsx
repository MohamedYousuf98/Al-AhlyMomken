"use client";

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '@/components/general/Navbar'; 
import ReadyOnline from '@/components/general/ReadyOnline'; 
import Footer from '@/components/general/Footer'; 
import ArticleNews from '@/components/ArticleNews';
import { getNews } from '@/utils/api';

const BodyWrapper = styled.div`
  background-image: url('/article-bg.webp');
  background-size: cover; 
  background-position: center;
`;

const About: React.FC = () => {
  const [news, setNews] = useState<any>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        console.log('Fetched news:', data); 
        if (data) {
          setNews(data);
        }
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <BodyWrapper>
        <Navbar />
        {news ? <ArticleNews news={news} /> : <p></p>}
        <ReadyOnline />
        <Footer />
      </BodyWrapper>
    </div>
  );
};

export default About;
