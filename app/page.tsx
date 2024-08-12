'use client';
import 'normalize.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../components/general/Navbar'; 
import Footer from '../components/general/Footer'; 
import ReadyOnline from '../components/general/ReadyOnline'; 
import OurPartnerSlider from '../components/sliders/OurPartnerSlider';
import BusinessGrowth from '../components/BusinessGrowth';
import Mobileapp from '../components/Mobileapp';
import PaymentSolution from '../components/PaymentSolutionTabs';
import StarRating from '../components/general/StarRating';
import BillPaymentSlider from '../components/sliders/BillPaymentSlider'; 
import styled from 'styled-components';

const BodyWrapper = styled.div`
  background-image: url('/HomePageBG.webp');
  background-size: cover; 
  background-position: center;
`;

const Home: React.FC = () => {
  return (
    <BodyWrapper>
      <Navbar />
      <BillPaymentSlider />
      <PaymentSolution />
      <BusinessGrowth />
      <Mobileapp />
      <ReadyOnline />
      <OurPartnerSlider />
      <Footer />
    </BodyWrapper>
  );
};

export default Home;
