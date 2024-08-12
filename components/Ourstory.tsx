// components/StoryPage.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchData } from '../utils/api';
import { Container, Row, Col } from 'react-bootstrap';

interface SectionProps {
  title: string;
  description: string;
  subtitle:string;
  image?: string;
}

interface DataProps {
  get_our_story: SectionProps;
  get_our_Quate: SectionProps;
  get_Our_mission: SectionProps;
  get_What_WeDo: SectionProps;
  our_missions: SectionProps;
  our_values: SectionProps;
  get_What_WeAre: SectionProps;
}

const Ourstory: React.FC = () => {
  const [data, setData] = useState<DataProps | null>(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <Container fluid className="p-100 ">
       <OurStorySection>
        <Row>
          <Col xs={12}>
            <TextContent>
              <SectionTitleStory>{data.get_our_story.title}</SectionTitleStory>
              <SectionSubtitle>{data.get_our_story.subtitle}</SectionSubtitle>
              <SectionDescription>{data.get_our_story.description}</SectionDescription>
            </TextContent>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <OurStoryImage>
              <img src={data.get_our_story.image} alt={data.get_our_story.title} />
            </OurStoryImage>
          </Col>
        </Row>
      </OurStorySection>

      <QuateSection>
        <Row>
          <Col xs={12} md={6}>
          <QuoteContainer>
              <QuoteIconLeft>“</QuoteIconLeft>
              <QuoteAuthor>{data.get_our_Quate.title}</QuoteAuthor>
              <QuoteText>{data.get_our_Quate.description}</QuoteText>
              <QuoteIconRight>”</QuoteIconRight>
            </QuoteContainer>
          </Col>
          <Col xs={12} md={6}>
            <CatlystImg>
              <img src={data.get_our_Quate.image} alt={data.get_our_Quate.title} />
            </CatlystImg>
          </Col>
        </Row>
      </QuateSection>


      <ValuesMissionsSection>
        <Row>
          <Col xs={12} md={6}>
            <ValuesMissionsContent>
              <h2>{data.our_missions.title}</h2>
              <p>{data.our_missions.description}</p>
            </ValuesMissionsContent>
          </Col>
          <Col xs={12} md={6}>
            <ValuesMissionsContent>
              <h2>{data.our_values.title}</h2>
              <p>{data.our_values.description}</p>
            </ValuesMissionsContent>
          </Col>
        </Row>
      </ValuesMissionsSection>

      <WhatWeDoSection>
        <Row>
          <Col xs={12} md={6}>
            <ImageContainer>
              <img src={data.get_Our_mission.image} alt={data.get_Our_mission.title} />
            </ImageContainer>
          </Col>
          <Col xs={12} md={6}>
            <TextContent>
              <SectionTitle>{data.get_Our_mission.title}</SectionTitle>
              <SectionDescription>{data.get_Our_mission.description}</SectionDescription>
            </TextContent>
          </Col>
        </Row>
      </WhatWeDoSection>

      <WhatWeAreSection>
        <Row>
          <Col xs={12} md={6}>
            <TextContent>
              <SectionTitle>{data.get_What_WeDo.title}</SectionTitle>
              <SectionDescription>{data.get_What_WeDo.description}</SectionDescription>
            </TextContent>
          </Col>
          <Col xs={12} md={6}>
            <ImageContainer>
              <img src={data.get_What_WeDo.image} alt={data.get_What_WeDo.title} />
            </ImageContainer>
          </Col>
        </Row>
      </WhatWeAreSection>


     
    </Container>
  );
};

// Styled Components

const QuoteContainer = styled.div`
  position: relative;
  text-align: left;
  top:130px;
  padding: 20px;
 
`;

const QuoteIconLeft = styled.span`
  position: absolute;
  left: 10px;
  font-size: 150px;
  color: #ccc;
  bottom: 120px;
  right:30px;
`;

const QuoteIconRight = styled.span`
  position: absolute;
  right: 10px;
  font-size: 150px;
  color: #ccc;
  top: 120px;
  right:40px;
`;

const QuoteText = styled.p`
font-size: 18px;
font-weight:400;
  line-height: 1.5;
  color:#5D6160;
`;

const QuoteAuthor = styled.p`
  font-size: 30px;
  font-weight: 600;
  color:#
`;
const QuateSection = styled.div`
  padding-top: 50px;
`;


const OurStorySection = styled.div`
  margin-bottom: 40px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const TextContent = styled.div`
  padding: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight:800;
  color: #00816D;
  margin-bottom: 30px;
  padding-top: 22%;
`;

const SectionTitleStory = styled.h2`
  font-size: 48px;
  font-weight:800;
  color: #00816D;
  margin-bottom: 30px;
  padding-top: 9%;
`;

const SectionSubtitle = styled.h2`
font-size: 16px;
font-weight:500;
color: #5D6160;
line-height: 1.6;
margin-bottom: 15px;
`;

const SectionDescription = styled.p`
  font-size: 16px;
  font-weight:500;
  color: #5D6160;
  line-height: 1.6;
`;

const CatlystImg = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 428px;
    border-radius: 40px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  margin-bottom:40px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    
  }
`;


const WhatWeDoSection = styled.div`
  width: 100%;
  margin-top:85px;
  img {
    width: 100%;
    height: 570px;
    border-radius: 30px;
    
  }
`;
const WhatWeAreSection = styled.div`
  width: 100%;
  margin-top:7%;
  img {
    width: 100%;
    height: 570px;
    border-radius: 30px;
    
  }
`;

const OurStoryImage = styled(ImageContainer)`
  img {
    width: 100%;
    height: 550px;
    border-radius: 40px;
  }
`;

const ValuesMissionsSection = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 24px;
    color: #00816D;
    margin-bottom: 10px;
    font-weight:700;
  }

  p {
    font-size: 16px;
    color: #5D6160;
    font-weight:500;
    line-height: 1.9;
  }
`;

const ValuesMissionsContent = styled.div`
  margin-top: 30px;
`;

const WhatWeAreImage = styled(ImageContainer)``;

export default Ourstory;
