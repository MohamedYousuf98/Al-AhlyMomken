// pages/vacancy.tsx
'use client';
import { getVacancyDetails } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import VacancyDetails from '@/components/VacancyDetails';
import Navbar from '@/components/general/Navbar';
import Footer from '@/components/general/Footer';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  background-image: url('/vacancy-bg.webp');
  background-size: cover;
  background-position: center;
`;

import axios from 'axios';

// Define the API URL
const API_URL_VACANCY = 'https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/vacancies/1'; // Replace with your actual URL

const VacancyPage: React.FC = () => {
  const [vacancy, setVacancy] = useState<any>(null);

  useEffect(() => {
    const fetchVacancyDetails = async () => {
      try {
        const response = await axios.get(API_URL_VACANCY, {
          headers: {
            'Accept-Language': 'en',
          },
        });
        console.log('Response Data:', response.data);
        if (response.data && response.data.data) {
          setVacancy(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchVacancyDetails();
  }, []);
  

  return (
    <BodyWrapper>
        <Navbar />
      {vacancy ? <VacancyDetails vacancy={vacancy} /> : <p>Loading...</p>}
        <Footer />
    </BodyWrapper>
  );
};

export default VacancyPage;
