import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPosData } from '../utils/api';
import BusinessButton from '../components/general/BusinessButton';
import StreamlineSection from '../components/general/StreamlineSection';
import Buttons from '../components/general/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';
import FullWidthLine from '../components/general/FullWidthLine';

interface Header {
  background_image: string;
  title: string;
  sub_title: string;
  description: string;
}

interface Section {
  image: string;
  title: string;
  description: string;
}

interface Feature {
  image: string;
  title: string;
  description: string;
}

interface Card {
  image: string;
  title: string;
  description: string;
}

interface Streamline {
  image: string;
  title: string;
  description: string;
}

interface POSData {
  header: Header;
  section: Section;
  features: Feature[];
  cards: Card[];
  streamline: Streamline[];
}

const HeaderSection = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  color: white;
  display:flex;
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
 
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display:flex;
  z-index: 2;
  color: white;
  padding-top:70px;
`;

const Title = styled.h1`
  font-size: 33px;
  font-weight: 600;
  color: #FDB615;
  margin-bottom: 20px;
  margin-top: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 29px;
  }
`;

const Subtitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Description = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 1100px;

  @media (max-width: 768px) {
    font-size: 10px;
    padding:15px 15px 0 0;
  }
`;

const SectionContainer = styled.section`
  padding-top:55px;
  padding-bottom:55px;

  @media (max-width: 768px) {
    padding-top:0px;
  }
 
`;

const SectionText = styled.div`
  flex: 1;
  margin-top:20%;
 

  h2 {
    font-size: 38px;
    font-weight: 700;
    color: #003830;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
  font-weight: 500;
  color: #5d6160;
 
  }
`;

const SectionImage = styled.img`
width: 100%;
height: auto;
object-fit: cover;
  

@media (max-width: 768px) {
  
   
}
`;

const FeaturesSection = styled.section`
  box-shadow: 0px 5px 20px 0px #00000012;
  padding: 60px;
  border-radius: 45px;
  margin-top: 50px;
 
`;

const FeatureCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  text-align: center;
`;

const SectionTitle = styled.h1`
  text-align: left;
  font-size: 34px;
  color: #003830;
  margin-bottom: 20px;
  font-weight: 800;
  text-align: left;

 
`;

const SectionDescription = styled.p`
  text-align: center;
  color: #5d6160;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 70px;
  text-align: left;
`;

const FeatureImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 14px;
  object-fit: cover;
 
  align-items: left;
  text-align: left;
  display: flex;
`;

const FeatureTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #171d1c;
  text-align: left;
  margin-top: 17px;
`;

const FeatureDescription = styled.p`
  color: #5D6160;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  flex-wrap: wrap;
`;

const CardsRow = styled(Row)`
  display: flex;
  justify-content: space-between;
`;

const CardContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 30px;
  padding: 25px;
  box-shadow: 0px 6px 24px 0px #00000012;
  display: flex;
  transition: transform 0.2s;
  height: 230px;
  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    height: 300px;
 
  }
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius:14px;
  margin-right: 25px;
  display:flex;
  align-items:start;

`;

const CardBody = styled.div`
  display: flex;
  flex-direction: column;
 
  
`;

const CardTitle = styled.h3`
  font-size: 22px;
  font-weight: 800;
  color: #171D1C;
  margin-bottom: 20px;
`;

const CardDescription = styled.p`
  font-size: 17px;
  font-weight: 400;
  color: #5D6160;
  line-height: 1.7;
  text-align: left;      
  

`;


const GetStartedButton = styled.button`
  background-color: #00816D;
  color: #fff;
  padding: 10px 20px;
  border-radius: 64px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 20px;

  &:hover {
    color: #171D1C;
  }
`;
const Ahlyjoin = styled.h2`
  font-size: 33px;
  font-weight: 800;
  color: #003830;
  text-align: left;
  margin-bottom: 40px;
`;


const Pos: React.FC = () => {
  const [data, setData] = useState<POSData | null>(null);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchPosData();
      setData(result);
    };

    getData();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const handleGetStarted = () => {
    // Logic for Get Started button
  };

  const handleContactUs = () => {
    // Logic for Contact Us button
  };

  return (
    <>
      <HeaderSection backgroundImage={data.header.background_image}>
        <Overlay />
        <Content>
          <BusinessButton />
          <Title>{data.header.title}</Title>
          <Subtitle>{data.header.sub_title}</Subtitle>
          <Description>{data.header.description}</Description>
          <Buttons onGetStarted={handleGetStarted} onContactUs={handleContactUs} />
        </Content>
      </HeaderSection>

      <Container fluid className="mt-5 p-100">
        {data.section && (
          <SectionContainer>
              <Row className="">
            <Col md={6}>
                <SectionText>
                  <h2>{data.section.title}</h2>
                  <p>{data.section.description}</p>
                </SectionText>
              </Col>
          
              <Col md={6}>
                {data.section.image && <SectionImage src={data.section.image} alt="Section Image" />}
              </Col>
            </Row>
          </SectionContainer>
        )}

        {data.features && data.features.length > 0 && (
          <FeaturesSection>
            <SectionTitle>Momkn's Point of Sale: Your One-Stop Solution for Seamless Payments</SectionTitle>
            <SectionDescription>
              Effortlessly Handle Utility Bills, Mobile Recharges, Tuitions, Entertainment, Transportation, Installments, Donations, and More—Across Egypt, Anytime, Anywhere!
            </SectionDescription>
            <Row>
              {data.features.map((feature, index) => (
                <Col key={index} md={3}>
                  <FeatureCard>
                    {feature.image && <FeatureImage src={feature.image} alt={`Feature ${index}`} />}
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureCard>
                </Col>
                
              ))}
            </Row>
            <GetStartedButton onClick={handleGetStarted}>Get started</GetStartedButton>
          </FeaturesSection>
          
        )}

        {data.cards && data.cards.length > 0 && (
          <>
            <FullWidthLine /> 
            <Ahlyjoin>Join Al Ahly Momkn </Ahlyjoin>
            <CardsRow>
              {data.cards.map((card, index) => (
                <Col key={index} md={6} className="mb-4">
                  <CardContainer>
                    {card.image && <CardImage src={card.image} alt={`Card ${index}`} />}
                    <CardBody>
                      <CardTitle>{card.title}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardBody>
                  </CardContainer>
                </Col>
              ))}
            </CardsRow>
          
              <GetStartedButton onClick={handleGetStarted}>Get started</GetStartedButton>
        
          </>
        )}
   <FullWidthLine /> 
        <StreamlineSection data={data.streamline} />
      </Container>
    </>
  );
};

export default Pos;
