import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';

interface Streamline {
  image: string;
  title: string;
  description: string;
}

interface StreamlineSectionProps {
  data: Streamline[];
}

const ExploreTitle = styled.h3`
  color: #003830;
  font-size: 35px;
  font-weight: 500;
  padding-top: 70px;
  padding-bottom: 50px;
  text-align: left;
  max-width: 780px;

  @media (max-width: 768px) {
    font-size: 30px;
    padding-bottom: 18px;
    padding-top: 30px;
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

const StreamlineSection: React.FC<StreamlineSectionProps> = ({ data }) => (
  <div>
    <ExploreTitle>Streamline your Online Transactions and Grow your Sales</ExploreTitle>
    <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
      {data.map((item, index) => (
        <PaddedCol key={index}>
          <BoxShadowCol>
            <StreamlineImage src={item.image} alt="streamline" />
            <StreamlineTitle>{item.title}</StreamlineTitle>
            <StreamlineDescription>{item.description}</StreamlineDescription>
          </BoxShadowCol>
        </PaddedCol>
      ))}
    </Row>
  </div>
);

export default StreamlineSection;
