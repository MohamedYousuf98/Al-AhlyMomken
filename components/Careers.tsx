import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SubscribeCareers from '../components/general/SubscribeCareers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { fetchVacancies } from '../utils/api'; 

const CareerHeader = styled.div`
  position: relative;
  height: 550px;
  width: 100%;
  background-image: url('/BG Careers.svg');
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    height: 850px;
  }

  .career_bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .container-fluid {
    position: absolute; 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    z-index: 2;
  }
 .career-content-header h2{
  font-size:48px;
  font-weight:800;
  color:#171D1C;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size:40px;
  }
 }

 .career-content-header h4{
  font-size:24px;
  font-weight:600;
  color:#000000;
  margin-top:10px;
  margin-bottom:10px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size:20px;
    margin-top:15px;
    margin-bottom:15px;
  }
 }

 .career-content-header p{
  font-size:16px;
  font-weight:400;
  color:#000000;
 max-width:650px;
 display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
 }
`;

const CareersInput = styled.section`
  .search-words-career {
    display: flex;
    align-items: center;
    border-radius: 84px;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid #5d61601a;
    margin-top: 50px;

    .search-vacancies-word {
      padding: 12px;
      border: none;
      border-radius: 84px 0 0 84px; /* Rounded corners on the left */
      flex: 1;
      font-size: 16px; /* Default font size */

      &:focus {
        outline: none;
      }
    }

    .categories-word {
      display: flex;
      align-items: center;
      position: relative;
      flex: 1;
      background: #ffffff;
      border: 1px solid #ddd;

      select {
        border: none;
        border-radius: 0;
        padding: 12px 40px;
        width: 100%;
        background: #36f1cd1a;
        color: #171d1c;
        cursor: pointer;
        font-size: 16px;
        font-weight: 700;
        appearance: none;

        option {
          background: #36f1cd1a;
          color: #171d1c;
        }

        &:focus {
          outline: none;
        }
      }

      .icon-left {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }

      .icon-right {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        pointer-events: none;
      }
    }

    .search-word {
      background: #00816d;
      color: #ffffff;
      padding: 12px;
      text-decoration: none;
      border: none;
      border-radius: 0 84px 84px 0;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;

      &:hover {
        color: black;
      }
    }
  }

  /* Responsive Styles */
  @media (max-width: 768px) {
    .search-words-career {
      border-radius: 60px; /* Reduce border-radius for smaller screens */
    }

    .search-vacancies-word {
      padding: 10px;
      font-size: 14px; /* Reduce font size */
    }

    .categories-word select {
      padding: 10px 30px; /* Adjust padding */
      font-size: 14px;
    }

    .search-word {
      padding: 10px;
      font-size: 14px; /* Reduce font size */
    }
  }

  @media (max-width: 480px) {
    .search-words-career {
      border-radius: 40px; /* Further reduce border-radius for mobile */
    }

    .search-vacancies-word {
      padding: 8px;
      font-size: 12px; /* Further reduce font size */
    }

    .categories-word select {
      padding: 8px 20px;
      font-size: 12px;
    }

    .search-word {
      padding: 8px;
      font-size: 12px; /* Further reduce font size */
    }
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


const Home: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVacancies = async () => {
      try {
        const result = await fetchVacancies(selectedCategory, searchTerm);
        setData(result);
      } catch (err: any) {
        setError(err.message);
      }
    };

    getVacancies();
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };


  return (
    <div>
      <CareerHeader>
        <div className="career_bg"></div>
        <div className="container-fluid p-100">
          <div className="row">
            <div className="col-md-7 career-content-header mt-5">
              <h2>Careers</h2>
              <h4>Join Our Team at Momkn: Explore Rewarding Career Opportunities</h4>
              <p>Explore the myriad opportunities awaiting you at Momkn, where our dynamic workplace is not just a job but a journey. Immerse yourself in a culture committed to fostering innovation and continuous growth. Uncover your potential as we collectively shape the future and create meaningful impact. Join us in building a career that goes beyond conventional boundaries,
                 embracing challenges, and unlocking new horizons. Your journey begins here.</p>
            </div>
            <div className="col-md-5">
              <SubscribeCareers title="Your Dynamic Title" />
            </div>
          </div>
        </div>
      </CareerHeader>

      <CareersInput>
  <div className="container-fluid p-100">
    <div className="search-words-career">
    <input
          type="text"
          className="search-vacancies-word"
          placeholder="Search for vacancies"
          value={searchTerm}
          onChange={handleSearchChange}
        />
  <div className="categories-word">
  <img src="/category-2.svg" alt="Category Icon" className="icon-left" />
  <select onChange={handleCategoryChange} value={selectedCategory} className="custom-select">
    <option value="" className="all-categories-option">All Categories</option>
    <option value="category1">Category 1</option>
    <option value="category2">Category 2</option>
    <option value="category3">Category 3</option>
  </select>
  <img src="/arrow-circle-down.svg" alt="Arrow Icon" className="icon-right" />
</div>

      <a href="#" className="search-word">
        SEARCH
      </a>
    </div>
  </div>
</CareersInput>


<VacanciesContainer>
        <div className="container-fluid p-100 mt-5">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2 className="text-left main-title">
                <span className="sub-title-available">Available</span>
                <span className="sub-title-career"> Vacancies</span>
              </h2>
            </div>
          </div>
          <div className="row">
            {data?.vacancies.map((vacancy: any) => (
              <div className="col-md-4" key={vacancy.id}>
                <div className="sales-dev">
                  <div className="vertical-line-right"></div>
                  <div className="sales-dev-header">
                    <h4 className="sales-dev-title">{vacancy.title}</h4>
                  </div>
                  <div className="sales-dev-body">
                    <div className="senior-level-icon d-flex align-items-center">
                      <img src="/book.svg" alt="level" className="career-icon" />
                      <span className="senior-level-text">{vacancy.level}</span>
                    </div>
                    <div className="horizontal-line"></div>
                    <div className="sales-details d-flex justify-content-between align-items-center">
                      <span className="d-flex align-items-center">
                        <img src="/briefcase.svg" alt="department" className="career-icon" /> {vacancy.department}
                      </span>
                      <a href={`your_link_here/${vacancy.id}`}>
                        <CareerIcon href="/vacancydetails">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </CareerIcon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </VacanciesContainer>
    </div>
  );
};

export default Home;