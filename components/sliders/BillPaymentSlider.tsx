import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

// Styled components 
const BillPaymentContainer = styled.div`
  overflow: hidden;

  .billpayment {
    padding-top: 190px;
    height: 740px;
    overflow: hidden;
  }
  @media (max-width: 768px) {
    .billpayment {
      padding-top: 120px;
      height: 850px;
    }
  }

  .slick-dots {
    position: absolute;
    left: 100px;
    top: 65%;
    width: auto;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex !important;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
      top: 97%;
    }
    li {
      margin: 0 14px;

      &.slick-active button::before {
        background-color: #00816D;
        width: 45px;
        height: 8px;
        border-radius: 4px;
      }

      button::before {
        content: '';
        width: 30px;
        height: 8px;
        background-color: #d3d3d3;
        border-radius: 4px;
        transition: background-color 0.3s, width 0.3s;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: 800;
  margin-bottom: 1.8rem;
  color: #00816D;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; 
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Subtitle = styled.h3`
  font-size: 21px;
  margin-bottom: 1.2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #5D6160;
  margin-bottom: 3.5rem;  
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 84px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  &.BecomePartner-button {
    background-color: #00816D;
    color: #ffffff;
    border: 1px solid #00816D;
  }

  &.BecomePartner-button:hover {
    color: #171D1C;
    transition: color 0.3s;
  }
  &.ContactUs-button {
    background-color: #ffffff;
    color: #171D1C;
    border: 1px solid #00816D;
  }
  &.ContactUs-button:hover {
    color: #f9ad5e;
    transition: color 0.3s;
  }
`;

const StarsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;

  .star {
    color: #FDB615; 
    margin-right: 5px;
  }

  .star-rating {
    font-size: 18px;
    margin-left: 10px;
    color:#171D1C;
    font-weight:600;
  }
  @media (max-width: 768px) {
    .star-rating {
      font-size: 13px;
    }
  }
  .normal-text {
    color:#5D6160;
  }
`;

const BackgroundImage = styled.img`
  width: 85%;
  height: 430px;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const ForegroundImage = styled.img`
  position: absolute;
  z-index: 2;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const Image1 = styled(ForegroundImage)`
  top: 21%;
  left: 44%;
  transform: translate(-50%, -10%);
  width: 600px;
  height:450px;
  padding: 10px;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const Image2 = styled(ForegroundImage)`
  top: 1%;
  left: 8%;
  transform: translate(-60%, -40%);
  width: 250px;
  height: 180px;
  border-radius: 20px;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const Image3 = styled(ForegroundImage)`
  top: 39%;
  left: 2%;
  transform: translate(-70%, -70%);
  border-radius: 20px;
  width: 278px;
  height: 100px;

  @media (max-width: 768px) {
    display: none !important;
  }
`;

const MobileImage = styled.img`
  width: 90% !important;
  margin-top: 15px;
  display: none !important;

  @media (max-width: 768px) {
    display: block !important;
  }
`;

const BillPaymentSlide: React.FC<{
  title: string;
  subtitle: string;
  paragraph: string;
  images: {
    backgroundImage: string;
    mainImage: string;
    topLeft: string;
    bottomLeft: string;
    mobileImage: string;
  };
  btnName1: string;
  btnName2: string;
  rate: number;
  rateFrom: string;
}> = ({
  title,
  subtitle,
  paragraph,
  images,
  btnName1,
  btnName2,
  rate,
  rateFrom,
}) => (
  <div className="container-fluid p-100">
    <div className="row billpayment">
      <div className="col-md-5">
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Paragraph>{paragraph}</Paragraph>
        <ButtonContainer>
          <Button className="BecomePartner-button">{btnName1}</Button>
          <Button className="ContactUs-button">{btnName2}</Button>
        </ButtonContainer>
        <StarsContainer>
          <div className="stars">
            {Array(rate).fill(0).map((_, index) => (
              <FontAwesomeIcon key={index} icon={faStar} className="star" />
            ))}
          </div>
          <span className="star-rating">
            Rated {rate}/5 - <span className="normal-text">from {rateFrom}</span>
          </span>
        </StarsContainer>
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-5 position-relative">
        <BackgroundImage src={images.backgroundImage} alt="Background" />
        <Image1 src={images.mainImage} alt="Image 1" />
        <Image2 src={images.topLeft} alt="Image 2" />
        <Image3 src={images.bottomLeft} alt="Image 3" />
        <MobileImage src={images.mobileImage} alt="Mobile Combined Image" />
      </div>
    </div>
  </div>
);

const BillPaymentSlider: React.FC = () => {
  const [slides, setSlides] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/home', {
      headers: {
        'Accept-Language': 'en',
      },
    })
    .then(response => {
      console.log('API Response:', response.data); 
      setSlides(response.data.data.header); 
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: false,
  };

  return (
    <BillPaymentContainer>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <BillPaymentSlide
            key={index}
            title={slide.title}
            subtitle={slide.subtitle}
            paragraph={slide.paragraph}
            images={slide.images} 
            btnName1={slide.btnName1}
            btnName2={slide.btnName2}
            rate={slide.rate}
            rateFrom={slide.rateFrom}
          />
        ))}
      </Slider>
    </BillPaymentContainer>
  );
};

export default BillPaymentSlider;
