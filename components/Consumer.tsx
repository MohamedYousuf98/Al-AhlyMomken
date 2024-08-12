import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchConsumerData } from '../utils/api';
import { Row, Col } from 'react-bootstrap';
import Buttons from '../components/general/Buttons';
import BusinessButton from '../components/general/BusinessButton';

const ConsumerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px !important;
`;

const Header = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  width: 100%;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  color: #FDB615;
  margin-bottom: 25px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 14px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #FFFFFF;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PaymentServices = styled.div`
  padding: 50px 20px;
  text-align: center;
`;

const ServicesTitle = styled.h2`
  font-size: 35px;
  font-weight: 700;
  margin-bottom: 60px;
  color: #00816D;
`;

const ServiceImageWrapper = styled.div`
  perspective: 1000px;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 312px;
  border-radius: 30px;
  transition: transform 0.7s ease;
  margin-bottom: 18px;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  color: white;
`;

const ContainerFluid = styled.div``;

interface HeaderData {
  background_image: string;
  title: string;
  sub_title: string;
  description: string;
}

interface ImageData {
  image: string;
}

const Consumer: React.FC = () => {
  const [header, setHeader] = useState<HeaderData | null>(null);
  const [images, setImages] = useState<ImageData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchConsumerData();
        console.log('Fetched data:', data); // Log the fetched data
        setHeader(data.header);
        setImages(data.images);
      } catch (error) {
        console.error('Error fetching consumer data:', error);
        setError('Failed to load data.');
      }
    };

    getData();
  }, []);

  const handleGetStarted = () => {
    // Logic for Get Started button
  };

  const handleContactUs = () => {
    // Logic for Contact Us button
  };

  return (
    <ConsumerContainer>
      {error && <p>{error}</p>}
      {header && (
        <Header backgroundImage={header.background_image}>
          <Overlay />
          <Content>
            <BusinessButton />
            <Title>{header.title}</Title>
            <Subtitle>{header.sub_title}</Subtitle>
            <Description>{header.description}</Description>
            <Buttons onGetStarted={handleGetStarted} onContactUs={handleContactUs} />
          </Content>
        </Header>
      )}
      <ContainerFluid className="container-fluid p-100">
        <PaymentServices>
          <ServicesTitle>Payment Services</ServicesTitle>
          <Row>
            {images.map((img, index) => (
              <Col xs={6} sm={6} md={3} key={index} className="mb-4">
                <ServiceImageWrapper>
                  <ServiceImage src={img.image} alt="Service Image" />
                </ServiceImageWrapper>
              </Col>
            ))}
          </Row>
        </PaymentServices>
      </ContainerFluid>
    </ConsumerContainer>
  );
};

export default Consumer;
