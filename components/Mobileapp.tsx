'use client';
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// styled-components

const MobileAppSection = styled.div`
  margin-top: 90px !important;
  text-align:center;
  padding:15px;
`;

const MainMobile = styled(Image)`
  width: 288px !important;
  height: 578px !important;

  @media (max-width: 768px) {
     width: 200px !important;
    height: 400px !important;
   
  }
`;

const ImageTopLeft = styled(Image)`
  position: absolute;
  top: 5%;
  left: 11%;
  width: 110px;
  height: 109px;

  @media (max-width: 768px) {
    top: 5%;
    left: 4%;
    width: 75px;
    height: 75px;
 }
`;

const ImageMiddleLeft = styled(Image)`
  position: absolute;
  top: 48%;
  left: 3%;
  width: 86px;
  height: 85px;

  @media (max-width: 768px) {
  top: 48%;
  left: -3%;
  width: 55px;
  height: 55px;
 }
`;


const ImageTopRight = styled(Image)`
  position: absolute;
  top: 5%;
  right: 14%;
  width: 85px;
  height: 85px;

  @media (max-width: 768px) {
    top: 10%;
    right: 7%;
    width: 55px;
    height: 55px;
   }
`;

const ImageMiddleRight = styled(Image)`
  position: absolute;
  top: 40%;
  right: 12%;
  width: 110px;
  height: 109px;

  @media (max-width: 768px) {
    top: 40%;
    right: 2%;
    width: 70px;
    height: 70px;
   }
`;

const ImageBottomRight = styled(Image)`
  position: absolute;
  bottom: 11%;
  right: 14%;
  width: 130px;
  height: 90px;

  @media (max-width: 768px) {
    bottom: 6%;
    right: 8%;
    width: 80px;
    height: 80px;
   }
`;

const AlAhlyAppLogo = styled.img`
  width: 100px; 
  height: auto;
`;

const OrangeUnderline = styled.p`
  position: relative;
  color: #003830; 
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  margin-left: 10px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px; 
    width: 100%;
    height: 2.5px; 
    background-color: #f9ad5e; 
    display: block;
  }
`;

const OneAppForAll = styled.h3`
  margin-top: .5rem; 
  color: #003830;
  font-size:45px;
  font-weight:500;
  text-align:left;

  @media (max-width: 768px) {
    font-size:25px;
    text-align:left;
   }
`;

const OneAppTextLeft = styled.p`
  margin-top: 1.2rem; 
  margin-bottom: 2rem; 
  color: #003830;
  font-size:16px;
  font-weight:450;
  text-align:left;

  @media (max-width: 768px) {
    font-size:15px;
    text-align:left;
   }
`;

const TextIcon = styled.div`
  display: flex;
  align-items: center;
  margin-top: .7rem; 
  color: #003830;
  font-size:16px;
  font-weight:400;
`;

const ImageTrue = styled.img`
  width: 20px; 
  height: 20px; 
  margin-bottom: 1rem; 
  margin-right:5px;
`;


const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 2.3rem; 
  margin-bottom: 1rem;
`;

const BottomLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none; 
  margin-right: 1.5rem; 
  background-color: #00816D; 
  color:#ffffff;
  border-radius:48px;
  padding:8px 30px;
  @media (max-width: 768px) {
    padding:10px 10px;
   br{
    display:none;
   }
  }
 
  &:last-child {
    margin-right: 0; 
  }

  img {
    width: 38px; 
    height: auto;
  }
   }
`;

const GoAppText = styled.div`
  margin-left: 0.5rem; 
  color: ##ffffff;
  font-size:10px;  
  text-align:left;
  
  span {
    display: block;
    font-weight: 550; 
    font-size:17px;
  }
  span br{
    display: none;
    
  }
 
 
`;


const MobileApp: React.FC = () => {
  return (
    <div className="container-fluid p-100">
      <MobileAppSection className="row mobile-app-section">
     
        <div className="col-md-6 position-relative">
          <MainMobile
            src="/mobile.png"
            alt="Mobile"
            layout="responsive"
            width={250}
            height={450}
            className="main-mobile"
          />
          <ImageTopLeft
            src="/greenball.png"
            alt="Image 1"
            layout="fixed"
            width={100}
            height={100}
            className="image-top-left"
          />
          <ImageMiddleLeft
            src="/ball-y.png"
            alt="Image 2"
            layout="fixed"
            width={100}
            height={100}
            className="image-middle-left"
          />
          <ImageBottomRight
            src="/paper fly.png"
            alt="Image 3"
            layout="fixed"
            width={100}
            height={100}
            className="image-bottom-right"
          />
          <ImageTopRight
            src="/ball-y.png"
            alt="Image 4"
            layout="fixed"
            width={100}
            height={100}
            className="image-top-right"
          />
          <ImageMiddleRight
            src="/white-ball.png"
            alt="Image 5"
            layout="fixed"
            width={100}
            height={100}
            className="image-middle-right"
          />
        </div>
        <div className="col-md-1 "></div>
        <div className="col-md-5 one-app-payments mt-3">
          <div className="d-flex align-items-center">
            <AlAhlyAppLogo
              src="/NavbarLogo.png"
              alt="Al-Ahly Momken App"
              className="img-fluid"
            />
            <OrangeUnderline>
              Al-Ahly Momken App
            </OrangeUnderline>
          </div>
          <OneAppForAll>
            One App for all your <br />
            payments
          </OneAppForAll>
          <OneAppTextLeft>
            Unlock Seamless Financial Management: Consolidate and Simplify Your 
            Payments with Our All-in-One App Experience.
          </OneAppTextLeft>
          <TextIcon>
            <ImageTrue src="true-img.PNG" alt="#" />
            <p>Streamlined digital transfers on the go.</p>
          </TextIcon>
          <TextIcon>
            <ImageTrue src="true-img.PNG" alt="#" />
            <p>Secure Payments for Peace of Mind.</p>
          </TextIcon>
          <TextIcon>
            <ImageTrue src="true-img.PNG" alt="#" />
            <p>Faster repeat transfers with just a few taps.</p>
          </TextIcon>
          <ButtonContainer>
      <BottomLink href="https://apps.apple.com/your-app-store-link">
        <img src="apple-icon.PNG" alt="Download App from App Store" />
        <GoAppText>
          Download on the <br />
          <span>App Store</span>
        </GoAppText>
      </BottomLink>
      <BottomLink href="https://play.google.com/store/apps/details?id=your-app-id">
        <img src="gplay-icon.PNG" alt="Download App from Google Play" />
        <GoAppText>
          GET IT ON <br />
          <span>Google Play</span>
        </GoAppText>
      </BottomLink>
    </ButtonContainer>
          </div>
          </MobileAppSection>
        </div>
  );
};

export default MobileApp;
