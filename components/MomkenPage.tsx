import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPaymentSolutionData } from '../utils/api';
import { Container, Row, Col } from 'react-bootstrap';
import GetStartedButton from './general/GetStartedButton';

// styled-components
const StyledContainerFluid = styled(Container)`
padding-left: 25px;
padding-right: 25px;
padding-top: 9%;
padding-bottom: 20px;

@media (max-width: 768px) {
  padding-left: 20px;
  padding-right: 20px;
}
`;

const HeaderTitle = styled.h1`
  font-size: 40px;
  font-weight: 700;
  color: #00816D;
  text-align: left;

  @media (max-width: 768px) {
    padding-top: 16%;
    font-size: 35px;
  }
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #5D6160;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: #171D1C;
  font-weight: 600;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-top: 20px;
    font-size: 22px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  color: #5D6160;
  font-weight: 400;
`;

const FullWidthImage = styled.img`
  width: 100%;
  height: 550px;
  border-radius: 30px;
  margin-top: 35px;
  margin-bottom: 65px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: 640px;
  border-radius: 40px;
  box-shadow: 10px 10px 80px rgba(0, 0, 0, 0.08);
  margin-top: 40px;

  @media (max-width: 768px) {
    height: auto;
    order: 2 !important;
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 115px;

  @media (max-width: 768px) {
    padding-top: 15px;
    order: 1 !important;
  }
`;

const SectionTitle = styled.h2`
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 23px;
  color: #003830;
`;

const SectionDescription = styled.h4`
  font-size: 18px;
  font-weight: 400;
  width: 100%; 
  max-width: 520px; 
  margin-bottom: 10px;
  color: #5D6160;
  line-height: 1.7;
`;

const FeaturesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 400;
  color: #5D6160;
  margin-bottom: 20px;
  white-space: normal;

  img {
    margin-right: 10px;
    width: 20px;
    height: 20px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const ExploreTitle = styled.h3`
  color: #003830;
  font-size: 35px;
  font-weight: 500;
  padding-top:70px;
  padding-bottom: 50px;
  text-align: left;
  max-width:780px;

  @media (max-width: 768px) {
    font-size: 30px;
    padding-bottom: 18px;
    padding-top:30px;
  }
`;

const StreamlineImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 7px;
`;

const StreamlineTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
  line-height: 1.6;
  color: #002c15;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const StreamlineDescription = styled.p`
  color: #5d6160;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
  padding-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BoxShadowCol = styled(Col)`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 10px 10px 70px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 293px;
`;

const PaddedCol = styled.div`
  padding: 10px;
`;


const CardContainer = styled(Row)`
  display: flex;
  justify-content: space-between; 
  margin-bottom: 20px; 
  margin-top: 9%; 
  padding: 0px; 
  

`;

const Card = styled.div`
  box-shadow: 0px 7px 12px 0px #00000014;
  border-radius: 0px 0px 30px 30px;
  text-align: left;
  transition: transform 0.3s ease;
  border-radius: 30px 30px 30px 30px;
  margin-bottom: 20px; 

  @media (max-width: 768px) {
    margin-bottom: 40px; 
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }

  img.card-image {
    object-fit: cover;
    width: 100%;
    height: 400px;
    border-radius: 30px 30px 0px 0px;
    padding: 0px !important;
  }
`;
const CardContent = styled.div`
  padding: 25px; 

`;
const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #003830;
  margin-bottom: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #5D6160;
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

`;


const PaymentSolution: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPaymentSolutionData()
      .then(response => {
        console.log(response);
        setData(response);
      })
      .catch((error) => setError(error.message));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <StyledContainerFluid>
      <Header>
        <Row>
          <Col md={3}>
            <HeaderTitle>{data.header.title}</HeaderTitle>
          </Col>
          <Col md={9}>
            <SubTitle>{data.header.sub_title}</SubTitle>
            <Description>{data.header.description}</Description>
          </Col>
        </Row>
        <Row>
          <Col>
            <FullWidthImage 
              src={data.header.image} 
              alt={data.header.title} 
            />
          </Col>
        </Row>
      </Header>

      <Row className="my-4">
        <Col sm={6} md={6}>
          <SectionContent>
            <SectionTitle>{data.momkn_payment.title}</SectionTitle>
            <SectionDescription>{data.momkn_payment.description}</SectionDescription>
            <FeaturesList>
              {data.momkn_payment.features.map((feature: string, index: number) => (
                <FeatureItem key={index}>
                  <img src="true-img.PNG" alt="icon" /> {feature}
                </FeatureItem>
              ))}
            </FeaturesList>
            <ButtonContainer>
              <GetStartedButton href="#start">
                Get Started
              </GetStartedButton>
            </ButtonContainer>
          </SectionContent>
        </Col>
        <Col md={6}>
          <SectionImage src={data.momkn_payment?.image || ''} alt={data.momkn_payment?.title || 'Image'} />
        </Col>
      </Row>

      <CardContainer>
        {Array.isArray(data.cards) ? (
          data.cards.map((card: any, index: number) => (
            <Col key={index} md={4}> 
              <Card>
                <img className="card-image" src={card.image} alt={card.title} />
                <CardContent>
                <CardTitle>{card.title}</CardTitle> 
            <CardDescription>{card.description}</CardDescription>
                  <GetStartedButton href="#start">
                    Get Started
                  </GetStartedButton>
                </CardContent>
              </Card>
            </Col>
          ))
        ) : (
          <Col>No data available</Col>
        )}
      </CardContainer>

      <ExploreTitle>Streamline your Online Transactions and 
        Grow your Sales</ExploreTitle>
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
        {data.streamline.map((item: any, index: number) => (
          <PaddedCol key={index}>
            <BoxShadowCol>
              <StreamlineImage src={item.image} alt="streamline" />
              <StreamlineTitle>{item.title}</StreamlineTitle>
              <StreamlineDescription>{item.description}</StreamlineDescription>
            </BoxShadowCol>
          </PaddedCol>
        ))}
      </Row>
    </StyledContainerFluid>
  );
};

export default PaymentSolution;
