'use client';

import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import StarRating from './StarRating'; 
import FullWidthLine from './FullWidthLine';
// Styled components
const StyledContainer = styled(Container)`
  .ready-take-online {
    text-align: center;
  }

  .ready-take-online-paragraph {
    margin-top: 1rem;
    text-align: center;
  }

  .btn-group {
    margin-top: 2rem;
  }

  .btn-wrapper {
    display: inline-block;
    margin: 0 0.5rem;
  }
`;

const Heading = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color:#003830;
  margin-bottom: 8px;
`;

const Paragraph = styled.p`
font-size: 14px;
font-weight: 500;
  color:#5D6160;
  line-height:1.8;

  @media (max-width: 768px) {
    font-size:12px;

   }
`;

const Button = styled.a`
padding: 15px 27px;
  font-weight: 600;
  border-radius: 84px;
  font-size: 17px;
  cursor: pointer;
  text-decoration:none;

  &.get-started {
    background-color:#00816D;
    color: #ffffff;
  }
  &.get-started:hover {
    background-color:#00816D;
    color: #171d1c;
  }

  &.contact-us2 {
    background-color: #ffffff; 
    color:#003830;
    border: 1px solid #00816D;
  }
  
  &.contact-us2:hover{
    color: #f9ad5e;

  }
  
`;

// Component
const ReadyOnline: React.FC = () => {
  return (
    <>
    <FullWidthLine />
    <StyledContainer fluid>
      <Row className="justify-content-center mt-5">
        <Col lg={5} className="mb-4">
          <div className="ready-take-online" data-aos="fade-up" data-aos-duration="800">
            <Heading>
              Ready to take your online <br /> Payment to the next level?
            </Heading>
            <div className="ready-take-online-paragraph" data-aos="fade-up" data-aos-duration="900">
              <Paragraph>
                Welcome to Al Ahly Momkn, where modern banking is effortless. <br />
                Our user-friendly app simplifies your financial experience.
              </Paragraph>
              <div className="btn-group" data-aos="fade-up" data-aos-duration="1000">
                <div className="btn-wrapper">
                  <Button href="your_url_here" className="get-started">
                    Get started
                  </Button>
                </div>
                <div className="btn-wrapper">
                  <Button href="your_url_here" className="contact-us2">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
            <StarRating />
          </div>
        </Col>
      </Row>
    </StyledContainer>
     <FullWidthLine /> 
     </>
  );
};

export default ReadyOnline;
