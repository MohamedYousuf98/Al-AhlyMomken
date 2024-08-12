'use client';
import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

// Styled components
const FullWidthLine = styled.div`
  position: relative;
  width: 100%;
  height: 1px; 
  background-color: #5D61601A; 
  margin: 40px 0; 
`;

const Card = styled.div`
  padding: 16px;
  display: flex;
  align-items: start;
  background: #ffffff; 
`;

const CardImage = styled.img`
  width: 67px;
  height: 67px;
  margin-right: 20px;
  margin-top: 20px;
  padding: 15px;
  border: 1.64px solid rgba(0, 129, 109, 0.1);
  border-radius: 14px;
`;

const CardText = styled.p`
  font-size: 16px;
  padding-top: 20px;
  color: rgba(93, 97, 96, 1);
  font-weight: 500;
`;

// Component
const BusinessGrowth: React.FC = () => {
  return (
    <>
      <FullWidthLine /> 
      <Container fluid className="p-100">
        <Row>
          <Col lg={4} md={6}>
            <Card data-aos="fade-up" data-aos-duration="600">
              <CardImage src="/icon1.PNG" alt="Business Growth Icon 1" />
              <CardText>
                We boost business growth, attract customers, and empower <br />
                individuals for a hassle-free lifestyle <br />
                through diverse financial platforms.
              </CardText>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card data-aos="fade-up" data-aos-duration="800">
              <CardImage src="/icon2.PNG" alt="Business Growth Icon 2" />
              <CardText>
                Committed to business growth and <br />
                customer attraction, we empower <br />
                individuals through convenient <br />
                financial platforms for a time-saving <br />
                and limitless lifestyle.
              </CardText>
            </Card>
          </Col>
          <Col lg={4} md={6}>
            <Card data-aos="fade-up" data-aos-duration="1100">
              <CardImage src="/icon3.PNG" alt="Business Growth Icon 3" />
              <CardText>
                Through diverse financial services, <br />
                we facilitate business growth, <br />
                customer attraction, and empower <br />
                individuals for a hassle-free, <br />
                time-saving, and limitless lifestyle.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
      <FullWidthLine /> 
    </>
  );
};

export default BusinessGrowth;
