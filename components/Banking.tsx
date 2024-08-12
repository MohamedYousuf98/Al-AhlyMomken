import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Container as BootstrapContainer } from 'react-bootstrap';
import { fetchGovernmentData } from '../utils/api';
import BusinessButton from '../components/general/BusinessButton';
import Buttons from '../components/general/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Section {
  id: number;
  image: string;
  title: string;
  description: string;
  features: string[];
}

interface StreamlineItem {
  image: string;
  title: string;
  description: string;
}

interface Data {
  header: {
    background_image: string;
    title: string;
    sub_title: string;
    description: string;
  };
  sections: Section[];
  streamline: StreamlineItem[];
}

const GovernmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px !important;

  
`;

const Container = styled.div`
  padding-top: 20px;

  @media (max-width: 768px) {
    padding-top: 0px;
   }
`;



const Header = styled.div<{ backgroundImage: string }>`
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  color: white;
  text-align: center;
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
  z-index: 2;
  color: white;
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
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width:1000px;

  @media (max-width: 768px) {
    font-size: 14px;
   }
`;

const SectionImage = styled.img`
  width: 100%;
  height: 660px;
  border-radius: 40px;
  box-shadow: 10px 10px 80px rgba(0, 0, 0, 0.08);
  margin-top: 70px;

  @media (max-width: 768px) {
    height: auto;
    order: 2 !important; 
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 175px;

  @media (max-width: 768px) {
    padding-top: 75px;
    order: 1 !important; 
  }
`;

const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 23px;
  color: #003830;
`;

const Sectiondescription = styled.h4`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
  color: #5D6160;
  line-height:1.7;
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

const GetStartedButton = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: #00816D;
  color: white;
  padding: 14px 20px;
  border-radius: 64px;
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;

  svg {
    margin-left: 7px;
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
const ExploreTitle = styled.h3`
  color: #003830;
  font-size: 46px;
  font-weight: 500;
  padding-bottom: 50px;


  @media (max-width: 768px) {
    font-size: 30px;
    padding-bottom: 20px;
   }
`;

const StyledContainerFluid = styled(Container)`
  padding-top: 10px;
  width: 100% !important;
  margin-top: 10%;
  margin-bottom: 5%;

  @media (max-width: 768px) {
    margin-top: 5%;
    
   }
`;

const BoxShadowCol = styled(Col)`
  background-color: white;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 10px 10px 70px rgba(0, 0, 0, 0.05);
  padding: 20px;
  width:100%;
  height:293px;
`;

const PaddedCol = styled.div`
  padding: 10px;
`;


const Banking: React.FC = () => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchGovernmentData();
        console.log('Fetched data:', result); // Debugging log
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data.');
      }
    };

    fetchData();
  }, []);

  const handleGetStarted = () => {
    // Logic for Get Started button
  };

  const handleContactUs = () => {
    // Logic for Contact Us button
  };

  return (
    <GovernmentContainer>
      {error && <p>{error}</p>}
      {data && (
        <>
          <Header backgroundImage={data.header.background_image}>
            <Overlay />
            <Content>
              <BusinessButton />
              <Title>{data.header.title}</Title>
              <Subtitle>{data.header.sub_title}</Subtitle>
              <Description>{data.header.description}</Description>
              <Buttons onGetStarted={handleGetStarted} onContactUs={handleContactUs} />
            </Content>
          </Header>

          <Container className="p-165">
            {data.sections.length > 0 ? (
              data.sections.map((section, index) => (
                <Row key={section.id} className="my-4">
                  {index % 2 === 0 ? (
                    <>
                      <Col sm={6} md={6}>
                        <SectionContent>
                          <SectionTitle>{section.title}</SectionTitle>
                          <Sectiondescription>{section.description}</Sectiondescription>
                          <FeaturesList>
                            {section.features.map((feature, index) => (
                              <FeatureItem key={index}>
                                <img src="true-img.PNG" alt="icon" /> {feature}
                              </FeatureItem>
                            ))}
                          </FeaturesList>
                          <ButtonContainer data-aos="fade-up" data-aos-duration="1000">
                            <GetStartedButton href="#">
                              Get Started
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.58398 7.9987H14.4173M14.4173 7.9987L8.00065 1.58203M14.4173 7.9987L8.00065 14.4154"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </GetStartedButton>
                          </ButtonContainer>
                        </SectionContent>
                      </Col>
                      <Col sm={6} md={6}>
                        <SectionImage src={section.image} alt={section.title} />
                      </Col>
                    </>
                  ) : (
                    <>
                      <Col sm={6} md={6}>
                        <SectionImage src={section.image} alt={section.title} />
                      </Col>
                      <Col sm={6} md={6}>
                        <SectionContent>
                          <SectionTitle>{section.title}</SectionTitle>
                          <Sectiondescription>{section.description}</Sectiondescription>
                          <FeaturesList>
                            {section.features.map((feature, index) => (
                              <FeatureItem key={index}>
                                <img src="true-img.PNG" alt="icon" /> {feature}
                              </FeatureItem>
                            ))}
                          </FeaturesList>
                          <ButtonContainer data-aos="fade-up" data-aos-duration="1000">
                            <GetStartedButton href="#">
                              Get Started
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1.58398 7.9987H14.4173M14.4173 7.9987L8.00065 1.58203M14.4173 7.9987L8.00065 14.4154"
                                  stroke="white"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                              </svg>
                            </GetStartedButton>
                          </ButtonContainer>
                        </SectionContent>
                      </Col>
                    </>
                  )}
                </Row>
              ))
            ) : (
              <p>No sections available.</p>
            )}
          </Container>

          <StyledContainerFluid className="p-100">
      <ExploreTitle >Explore What's Possible:</ExploreTitle>
      <Row className="row-cols-2 row-cols-md-3 row-cols-lg-5 g-3 mt-5">
        {error && <p>{error}</p>}
        {data && data.streamline.map((item, index) => (
          <PaddedCol key={index}>
            <BoxShadowCol className="text-left" data-aos="fade-up" data-aos-duration="1000">
              <StreamlineImage src={item.image} alt={item.title} data-aos="fade-up" data-aos-duration="800" />
              <StreamlineTitle>{item.title}</StreamlineTitle>
              <StreamlineDescription>{item.description}</StreamlineDescription>
            </BoxShadowCol>
          </PaddedCol>
        ))}
      </Row>
    </StyledContainerFluid>

        </>
      )}
    </GovernmentContainer>
  );
};

export default Banking;

