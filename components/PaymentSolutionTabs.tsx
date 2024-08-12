'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Section = styled.section`
  padding-top: 5.7%;

  @media (max-width: 768px) {
    padding-top: 18.7%;
 
   }
`;

const Title = styled.h2`
  color: #00816d;
  font-size: 30px;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size:20px;
 
   }
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #5d6160;
`;

const ThreeWords = styled.div`
  display: flex;
  border-radius: 50px;
  overflow: hidden;
  margin-top: 5%;
  border: 2px solid #f4f4f6;
  color: #5d6160;
  font-size: 18px;
`;

const Word = styled.div<{ selected?: boolean }>`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  opacity: ${({ selected }) => (selected ? '100%' : '70%')};
  background: ${({ selected }) => (selected ? 'linear-gradient(92.87deg, #00816d -35.02%, #003830 163.72%)' : 'transparent')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#5d6160')};
  font-weight: ${({ selected }) => (selected ? '600' : 'normal')};
  font-size: ${({ selected }) => (selected ? '19px' : 'inherit')};
  cursor: pointer;
 
  @media (max-width: 768px) {
   font-size:14px;
  
 }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
`;

const VerticalImage = styled.img`
  width: 4px;
  height: 420px;
  margin-right: 20px;

`;

const ContentLeft = styled.div`
  margin-bottom: 55px;
`;

const Number = styled.p`
  color: #003830;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 3px;
`;

const NumberDescription = styled.p`
  color: #003830;
  opacity: 80%;
  font-size: 16px;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const RightSection = styled.div<{ display?: string }>`
  display: ${({ display }) => display || 'none'};
  position: relative;
  width: 100%;
  text-align: left;
`;

const Img = styled.img`
  width: 100%;
  height: 435px;
  border-radius:12px;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; 
  padding: 30px 30px 50px 30px;
  box-sizing: border-box;
  border-radius: 12px; 
 
`;


const ArrowIcon = styled(FontAwesomeIcon)`
  margin-left: 8px; 
  margin-top: 15px; 
`;


const StyledLink = styled.a`
 
  color: #ffffff;
  text-decoration: none;
 
`;
const PaymentSolution: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState('Momkn Pay');

  const changeContent = (selected: string) => {
    setSelectedContent(selected);
  };

  return (
    <Section>
      <div className="container-fluid p-100">
        <Title data-aos="fade-up" data-aos-duration="1000">Get Started with Payments Solutions</Title>
        <Description data-aos="fade-up" data-aos-duration="1000">
          Lorem ipsum dolor sit amet consectetur. Risus elementum sed congue ullamcorper sapien. Et elementum arcu lectus nam. Consectetur aliquam.
        </Description>
        <ThreeWords>
          <Word
            selected={selectedContent === 'Momkn Pay'}
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => changeContent('Momkn Pay')}
          >
            Momkn Pay
          </Word>
          <Word
            selected={selectedContent === 'Momkn App'}
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => changeContent('Momkn App')}
          >
            Momkn App
          </Word>
          <Word
            selected={selectedContent === 'Point Of Sale'}
            data-aos="fade-up"
            data-aos-duration="1000"
            onClick={() => changeContent('Point Of Sale')}
          >
            Point Of Sale
          </Word>
        </ThreeWords>
        <div className="page-container mt-5 row align-items-center">
          <div className={`left-section col-md-4 d-flex`}>
            <div className={`d-flex align-items-center`} data-aos="fade-up" data-aos-duration="1000">
              <VerticalImage src="/line.PNG" alt="Vertical Line Image" />
              <LeftSection>
                {selectedContent === 'Momkn Pay' && (
                  <div className={`content-momkn-pay`}>
                    <ContentLeft>
                      <Number data-aos="fade-up" data-aos-duration="1000">130</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Nibh tellus in.
                      </NumberDescription>
                      <Number data-aos="fade-up" data-aos-duration="1000">$10+</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Nibh tellus in.
                      </NumberDescription>
                      <Number>Lorem ipsum</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Imperdiet lorem <br /> tincidunt tempus turpis <br /> adipiscing. Elementum.
                      </NumberDescription>
                    </ContentLeft>
                  </div>
                )}
                {selectedContent === 'Momkn App' && (
                  <div className={`content-momkn-app`}>
                    <ContentLeft>
                      <Number data-aos="fade-up" data-aos-duration="1000">200</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Nibh tellus in.
                      </NumberDescription>
                      <Number data-aos="fade-up" data-aos-duration="1000">$20+</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Nibh tellus in.
                      </NumberDescription>
                      <Number>Lorem ipsum</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Imperdiet lorem <br /> tincidunt tempus turpis <br /> adipiscing. Elementum.
                      </NumberDescription>
                    </ContentLeft>
                  </div>
                )}
                {selectedContent === 'Point Of Sale' && (
                  <div className={`content-point-of-sale`}>
                    <ContentLeft>
                      <Number data-aos="fade-up" data-aos-duration="1000">300</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Nibh tellus in.
                      </NumberDescription>
                      <Number data-aos="fade-up" data-aos-duration="1000">$30+</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Nibh tellus in.
                      </NumberDescription>
                      <Number>Lorem ipsum</Number>
                      <NumberDescription data-aos="fade-up" data-aos-duration="1000">
                        Lorem ipsum dolor sit amet <br /> consectetur. Imperdiet lorem <br /> tincidunt tempus turpis <br /> adipiscing. Elementum.
                      </NumberDescription>
                    </ContentLeft>
                  </div>
                )}
              </LeftSection>
            </div>
          </div>
          <div className={`right-section col-md-8`}>
            <RightSection display={selectedContent === 'Momkn Pay' ? 'block' : 'none'}>
              <div style={{ position: 'relative' }}>
                <Img src="/financial-service.jpg" alt="Momkn Pay Image" />
                <TextOverlay>
                  <h4 data-aos="fade-up" data-aos-duration="1000">Simplifying Payments, Empoweing <br />Transactions</h4>
                  <StyledLink href="/your-link-path" data-aos="fade-up" data-aos-duration="1000">
                    Learn more <ArrowIcon icon={faArrowRight} />
                  </StyledLink>
                </TextOverlay>
              </div>
            </RightSection>
            <RightSection display={selectedContent === 'Momkn App' ? 'block' : 'none'}>
              <div style={{ position: 'relative' }}>
                <Img src=" /sl1.png" alt="Momkn App Image" />
                <TextOverlay>
                  <h4 data-aos="fade-up" data-aos-duration="1000">Simplifying Payments, Empoweing <br />Transactions</h4>
                  <StyledLink href="/your-link-path" data-aos="fade-up" data-aos-duration="1000">
                    Learn more <ArrowIcon icon={faArrowRight} />
                  </StyledLink>
                </TextOverlay>
              </div>
            </RightSection>
            <RightSection display={selectedContent === 'Point Of Sale' ? 'block' : 'none'}>
              <div style={{ position: 'relative' }}>
                <Img src="/education.jpg" alt="Point Of Sale Image" />
                <TextOverlay>
                  <h4 data-aos="fade-up" data-aos-duration="1000">Simplifying Payments, Empoweing <br />Transactions</h4>
                  <StyledLink href="/your-link-path" data-aos="fade-up" data-aos-duration="1000">
                    Learn more <ArrowIcon icon={faArrowRight} />
                  </StyledLink>
                </TextOverlay>
              </div>
            </RightSection>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PaymentSolution;
