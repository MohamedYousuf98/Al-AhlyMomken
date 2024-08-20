import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import SubscribeCareers from '../components/general/SubscribeCareers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface RelatedVacancy {
  id: string;
  title: string;
  name: string;
  level: string;
  category: string;
}

interface Vacancy {
  id: string;
  name: string;
  title: string;
  level: string;
  about_project: string;
  requirments: string;
  responsibilities: string;
  advantage: string;
  about: string;
  category: string;
  related?: {
    vacancies: RelatedVacancy[];
  };
}

const CareerHeader = styled.div`
  position: relative;
  height: 550px;
  width: 100%;
  background-image: url('/BG Careers.svg');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 800px;
  }

  .container-fluid {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }

  .career-content-header h2 {
    font-size: 30px;
    font-weight: 800;
    color: #171d1c;
    margin-top: 10%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    

    @media (max-width: 768px) {
      font-size: 20px;
      margin-top: 0px;
    }
  }

  .career-content-header p {
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    max-width: 650px;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const VacancyDetailsContainer = styled.div`
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  margin-top: 13%;
  padding: 42px 45px;
  border-radius: 50px;
  background-color: #ffffff;
  z-index: 1 !important;

  h2 {
    font-size: 17px;
    font-weight: 600;
    color: #171D1C;
    margin-bottom: 10px;
  }

  .form-group .apply-job {
    background-color: #00816d;
    border-radius: 84px;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    width: 100%;
    margin-top: 10px;
  }

  .form-group .apply-job:hover {
    color: #171D1C;
  }
 
  .social-icons-career{
    text-align:center;
  }
  .social-icon{
    margin:10px;
  }
`;

const Container = styled.div`
  padding: 80px 0;
`;

const ArticleHeader = styled.div`
  text-align: left;
  font-weight:700;
  font-size:16px;
  color:#5D6160;
`;

const DescriptionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #171D1C;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const DescriptionParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #5D6160;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const VacanciesContainer = styled.div`
  .main-title {
    text-align: left;
    font-size: 27px;
    font-weight:800;
    margin-top: 20px;
  }

  .sub-title-available {
    color: #000;
    font-weight:800;
  }

  .sub-title-career {
    color: #009688; 
    font-weight:800;
  }

  .sales-dev {
    
    padding: 20px;
    margin-bottom: 30px;
    position: relative;
    transition: box-shadow 0.3s ease;
    margin-bottom:60px;
  }


  .sales-dev-title {
    margin-bottom: 25px;
    color: #171D1C; 
    font-weight:700;
    font-size:16px;
  }

  .sales-dev-body {
    margin-top: 15px;
  }

  .senior-level-icon {
    font-size: 16px;
    align-items: center;
    color:#5D6160;
    font-weight:16px;
  }

  .career-icon {
    margin-right: 8px;
  }

  .verticle-line-career {
    width: 100%;
    height: 1px;
    background: #E6E6E8;
    margin: 20px 0;
  }

  .sales-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .sales-details span {
    font-size: 16px;
    font-weight: 600;
    color: #003830;
    text-transform: uppercase;
    align-items: center;
    border: 1px solid #171d1c;
    border-radius: 10px;
    padding: 6px 10px;
  }

  .angle-right-career {
    color: #E6E6E8; 
    font-size: 24px;
    cursor: pointer;
  }


  .vertical-line-right {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: .7px;
    background-color: #E6E6E8; 

    @media (max-width: 768px) {
      display:none;
    }
  }
.vertical-line-right:last-child {
  display: none !important;
}
.container .vertical-line-right:last-child {
  display: none;
}

@media (max-width: 768px) {
  .main-title{
    font-size:20px;
  }
 
}

  .horizontal-line {
    width: 100%;
    height: 1px;
    background-color:#E6E6E8; 
    margin: 30px 0;

   
  }
`;

const CareerIcon = styled.a`
  color: #333;
  transition: color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #00816D; 
  color: #ffffff; 

  &:hover{
    color:#171D1C;
  }
`;


const VacancyDetails: React.FC<{ vacancy: Vacancy }> = ({ vacancy }) => {
  return (
    <div>
      <CareerHeader>
        <div className="container-fluid p-100">
          <div className="row">
            <div className="col-md-7 career-content-header mt-5">
            <h2>{vacancy.title}</h2>
              <p>{vacancy.level}</p>
            </div>
            <div className="col-md-5">
              <VacancyDetailsContainer>
                <h2>Apply and fill the form</h2>
                <div className="form-group">
                  <a
                    href=""
                    className="btn apply-job mb-3"
                    style={{ padding: '12px', borderRadius: '84px' }}
                  >
                    Apply for this job
                  </a>
                </div>
                <div className="social-icons-career">
                  <p>Share this vacancy</p>
                  <a href="https://facebook.com" target="" className="social-icon ">
                    <img src="/facebook1.png" alt="Facebook" />
                  </a>
                  <a href="https://linkedin.com" target="" className="social-icon">
                    <img src="/link.png" alt="LinkedIn" />
                  </a>
                </div>
              </VacancyDetailsContainer>
            </div>
          </div>
        </div>
      </CareerHeader>

      <Container className="container-fluid p-100">
        <div className="row ">
          <div className="col-12 ">
            <ArticleHeader>
              <DescriptionParagraph>{vacancy.name}</DescriptionParagraph>
            </ArticleHeader>
            <div>
              <DescriptionTitle>About Project</DescriptionTitle>
              <DescriptionParagraph>{vacancy.about_project}</DescriptionParagraph>
              <DescriptionTitle>Requirements</DescriptionTitle>
              <DescriptionParagraph>{vacancy.requirments}</DescriptionParagraph>
              <DescriptionTitle>Responsibilities</DescriptionTitle>
              <DescriptionParagraph>{vacancy.responsibilities}</DescriptionParagraph>
              <DescriptionTitle>What will you get with Al-Ahly Momkn</DescriptionTitle>
              <DescriptionParagraph>{vacancy.advantage}</DescriptionParagraph>
              <DescriptionTitle>About Al-Ahly Momkn</DescriptionTitle>
              <DescriptionParagraph>{vacancy.about}</DescriptionParagraph>
            </div>

            <VacanciesContainer>
              {vacancy.related?.vacancies && vacancy.related.vacancies.length > 0 && (
                <>
                  <div className="row mt-5">
                    <div className="col-md-12 mb-4">
                      <h2 className="text-left main-title">
                        <span className="sub-title-available">You May </span>
                        <span className="sub-title-career"> Find Interesting</span>
                      </h2>
                    </div>
                  </div>
                  <div className="row">
                    {vacancy.related.vacancies.map((vac) => (
                      <div className="col-md-4" key={vac.id}>
                        <div className="sales-dev">
                        <div className="vertical-line-right"></div>
                          <div className="sales-dev-header">
                            <h4 className="sales-dev-title">{vac.title}</h4>
                          </div>
                          <div className="sales-dev-body">
                            <div className="senior-level-icon d-flex align-items-center">
                              <img src="/book.svg" alt="level" className="career-icon" />
                              <span className="senior-level-text">{vac.level}</span>
                            </div>
                            <div className="horizontal-line"></div>
                            <div className="sales-details d-flex justify-content-between align-items-center">
                              <span className="d-flex align-items-center">
                                <img src="/briefcase.svg" alt="category" className="career-icon" /> {vac.category}
                              </span>
                              <a href={``}>
                        <CareerIcon href="#">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </CareerIcon>
                      </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                </>
              )}
            </VacanciesContainer>
               
          </div>
          
        </div>
      </Container>
    </div>
  );
};

export default VacancyDetails;
