"use client"; 

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FullWidthSlider = styled.div`
  overflow: hidden; 
  padding: 0px 0; 
  text-align: center;

  .slick-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px; 
  }

  .slick-slide img {
    height: 100px; 
    width: 111px;
    object-fit: contain;
    margin-bottom:20px;
  }
  .slick-slide:focus img{
    border:none !important;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: #003830;
  margin-bottom: 50px;
  margin-top: 15px;
`;

const sliderSettings = {
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  draggable: true,
  swipeToSlide: true,
  touchMove: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1200, // Large devices
      settings: {
        slidesToShow: 6,
      },
    },
    {
      breakpoint: 992, // Medium devices
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 768, // Small devices
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 576, // Extra small devices
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480, // Very small devices
      settings: {
        slidesToShow: 2,
      },
    },
  ],
};

const OurPartnerSlider: React.FC = () => {
  const images = [
    '/orange.png',
    '/vodafone.png',
    '/orman.png',
    '/etisalatnew.png',
    '/masr elkhir.png',
    '/pr-card.png',
    '/yacoub.png',
    '/we.png',
    '/talabat.png',
  ];

  return (
    <FullWidthSlider>
      <Title>Trusted by thousands of businesses.</Title>
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Partner ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </FullWidthSlider>
  );
};

export default OurPartnerSlider;
