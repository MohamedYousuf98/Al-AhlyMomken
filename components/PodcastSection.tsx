import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchPodcasts } from '../utils/api';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// Styled-components
const Title = styled.h2`
  text-align: left;
  margin-bottom: 40px;
  margin-top: 100px;
  font-size: 32px;;
  font-weight: 800;
  color:#171D1C;
`;

const PodcastItem = styled.div`
  position: relative;
  margin-bottom: 40px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 7px 12px 0px #00000014;
`;

const BackgroundImage = styled.img`
border-radius: 20px 20px 0px 0px;
object-fit: cover;
width: 100%;
height: 370px;
`;

const PodcastImage = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index: 1;
`;

const PodcastContentContainer = styled.div`
  position: absolute;
  top: 240px;
  left: 20px;
  padding: 8px;

`;

const PodcastContent = styled.div`
  text-align: left;


`;

const PodcastTitle = styled.h5`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 15px;
  color:#171D1C;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

 
`;

const PodcastSubtitle = styled.h4`
font-size: 25px;
font-weight: 300;
letter-spacing: 5px;
color: #ffffff;
text-transform: uppercase;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #171D1C; 
  }
`;

const PodcastDescription = styled.p`
font-size: 16px;
font-weight: 500;
color: #5d6160;
margin-top: 15px;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
overflow: hidden;
text-overflow: ellipsis;
`;

const HomeImageTitle = styled.h3`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 5px;
color: #ffffff;
text-transform: uppercase;
  margin: 10px 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: #171D1C; 
  }
`;

const ListenNow = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #003830;
  font-size:20px;
  font-weight: 500;
  text-decoration:underline;

  padding-bottom: 4px; 

  &:hover {
    color: #000000; 
  }
`;


const ListenNowIcon = styled.svg`
  margin-right: 10px;
  background-color: #000; 
  border-radius: 50%; 
  padding: 8px;
  width: 30px;  
  height: 30px; 
`;

const PodcastInfo = styled.div`
  padding: 25px;
`;
const CustomLink = styled.a`
  text-decoration: none; 
  color: inherit; 
  
  &:hover {
    color: #000000; 
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .pagination {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: center;
    align-items: center;
  }

  .pagination li {
    margin: 0 5px;
  }

  .pagination li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #e9ecef;
    color: #6c757d;
    text-decoration: none;
    font-size: 16px;
    transition: background-color 0.3s, color 0.3s;

    &:hover,
    &.active {
      background-color: #00796B;
      color: #fff;
    }
  }

  .page-controls {
    display: flex;
    justify-content: center;
    margin-right: 20px;
    margin-left: 20px;

    button {
      background: none;
      border: none;
      color: #171D1C;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      transition: color 0.3s;
      display: flex;
      align-items: center;

      &:hover {
        color: #00796B;
      }

      &:disabled {
        color: #5D6160;
        cursor: not-allowed;
      }
    }
  }
`;

const PodcastSection: React.FC = () => {
  const [podcasts, setPodcasts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPage = async (page: number) => {
    try {
      setLoading(true);
      const result = await fetchPodcasts(page);
      setPodcasts(result.data.podcasts);
      setTotalPages(result.data.last_page); // Assuming `last_page` exists in response
      setCurrentPage(result.data.current_page); // Assuming `current_page` exists in response
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(currentPage);
  }, [currentPage]);

  if (loading) {
    return ;
  }

  return (
    <Container fluid className="p-100">
      <Title>Podcasts</Title>
      <Row>
        {podcasts.map(podcast => (
          <Col xs={12} sm={6} md={4} lg={4} key={podcast.id}>
            <PodcastItem>
              <BackgroundImage src={podcast.home_baground_image} alt={podcast.home_title} />
              <CustomLink href="#">
                <PodcastImage src={podcast.voice_image} alt={podcast.home_title} />
              </CustomLink>
              <PodcastContentContainer>
                <CustomLink href="#">
                  <PodcastContent>
                    <PodcastSubtitle>{podcast.home_image_sub_title}</PodcastSubtitle>
                    <HomeImageTitle>{podcast.home_image_title}</HomeImageTitle>
                  </PodcastContent>
                </CustomLink>
              </PodcastContentContainer>
              <PodcastInfo>
                <CustomLink href="#">
                  <PodcastTitle>{podcast.home_title}</PodcastTitle>
                </CustomLink>
                <PodcastDescription>{podcast.home_description}</PodcastDescription>
                <ListenNow href={podcast.voice}>
                  <ListenNowIcon width="20" height="20" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0.724532 1.96644C0.746871 1.77714 0.813105 1.59568 0.917959 1.4365C1.02281 1.27732 1.16339 1.14483 1.32849 1.04957C1.49359 0.954314 1.67865 0.898928 1.86894 0.887822C2.05922 0.876716 2.24947 0.910198 2.42453 0.985602C3.30953 1.36394 5.29286 2.2631 7.80953 3.7156C10.327 5.16893 12.0979 6.4381 12.867 7.01393C13.5237 7.50643 13.5254 8.4831 12.8679 8.97727C12.1062 9.54977 10.357 10.8023 7.80953 12.2739C5.25953 13.7456 3.29953 14.6339 2.42286 15.0073C1.66786 15.3298 0.822865 14.8406 0.724532 14.0264C0.609532 13.0748 0.394531 10.9139 0.394531 7.9956C0.394531 5.07893 0.608698 2.91894 0.724532 1.96644Z" fill="white" />
                  </ListenNowIcon>
                  Listen Now
                </ListenNow>
              </PodcastInfo>
            </PodcastItem>
          </Col>
        ))}
      </Row>

      <PaginationContainer>
        <div className="page-controls">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        </div>
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index + 1}>
              <a 
                href="#"
                className={currentPage === index + 1 ? 'active' : ''} 
                onClick={(e) => {
                  e.preventDefault();
                  setCurrentPage(index + 1);
                }}
              >
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
        <div className="page-controls">
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </PaginationContainer>
    </Container>
  );
};

export default PodcastSection;