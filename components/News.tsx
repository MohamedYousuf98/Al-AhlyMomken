import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchNews } from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Author {
  image: string;
  name: string;
}

interface NewsItem {
  id: string;
  image: string;
  home_title: string;
  home_description: string;
  author: Author;
  date: string;
  category: string;
}

const NewsSection = styled.div`
  padding: 100px 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const LastNewsTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #171D1C;
`;


const NewsMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  li {
    margin: 0 15px;

    @media (max-width: 768px) {
      flex-direction: column;
      margin-bottom: 35px;
    }
  }

  a {
    text-decoration: none;
    color: #003830;
    font-size: 16px;
    font-weight: 400;
    padding: 10px 28px;
    border-radius: 20px;
    background-color: #e9ecef;

    &:hover{
        background-color: #00816D;
        color: #ffffff;
    }
    &.active {
      background-color: #00816D;
      color: #ffffff;
      font-size: 17px;
    font-weight: 600;
    }
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #E6E6E8;
    width: 100%;
  }

  .author-image {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }

  .author-details {
    flex-grow: 1;
  }

  .author-details-icon {
    margin-left: 10px;

    a {
      color: #0d6efd;
      font-size: 18px;
    }
  }
`;

const NewsItemContainer = styled.div`
  padding: 20px 0;
`;

const NewsCard = styled.div`
  margin-bottom: 20px;
  border: none;
`;

const NewsImage = styled.img`
  height: 280px;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const NewsTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #171D1C;
  margin-bottom: 15px;
  margin-top: 10px;
  border-bottom: none !important;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-underline:none !important;
  text-decoration:none !important;

 
`;



const NewsDescription = styled.p`
  font-size: 16px;
  color: #5D6160;
  margin-bottom: 25px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const AuthorImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const AuthorDetails = styled.div`
  flex-grow: 1;
  margin-top: 10px;
`;

const AuthorName = styled.h5`
  font-size: 16px;
  font-weight: 700;
  color: #171D1C;
  margin-bottom: 5px;
  margin-top: 15px;
`;

const AuthorDate = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #5D6160;
`;

const AuthorIcon = styled.a`
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
  justify-content:center;
  margin-right:20px;
  margin-left:20px;

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

const News = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const fetchPage = async (page: number, type: string) => {
    try {
      setLoading(true);
      const result = await fetchNews(page, type.toLowerCase());
      setNews(result.data.news);
      setFilteredNews(result.data.news);
      setCurrentPage(result.data.current_page); 
      setTotalPages(result.data.last_page); 
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(currentPage, activeCategory);
  }, [currentPage, activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1); 
  };

  if (loading) {
    return 
  }

  return (
    <NewsSection className='container-fluid p-100'>
      <Header>
        <LastNewsTitle>Last News</LastNewsTitle>
        <NewsMenu>
          <li><a href="#" className={activeCategory === 'All' ? 'active' : ''} onClick={() => handleCategoryChange('All')}>All</a></li>
          <li><a href="#" className={activeCategory === 'News' ? 'active' : ''} onClick={() => handleCategoryChange('News')}>News</a></li>
          <li><a href="#" className={activeCategory === 'Articles' ? 'active' : ''} onClick={() => handleCategoryChange('Articles')}>Articles</a></li>
        </NewsMenu>
      </Header>
  
       
          <NewsItemContainer>
          <div className="container">
          <div className="row">
            {filteredNews.map(item => (
              <div className="col-md-4" key={item.id}>
                <NewsCard className="card">
                  <a href="#">
                    <NewsImage src={item.image} alt={item.home_title} className="card-img-top" />
                  </a>
                  <div className="card-body">
                  <CustomLink href="#">
                      <NewsTitle>{item.home_title}</NewsTitle>
                    </CustomLink>
                    <NewsDescription>{item.home_description}</NewsDescription>
                    <AuthorInfo>
                      <a href="#">
                        <AuthorImage src={item.author.image} alt={item.author.name} />
                      </a>
                      <AuthorDetails>
                        <AuthorName>{item.author.name}</AuthorName>
                        <AuthorDate>{item.date}</AuthorDate>
                      </AuthorDetails>
                      <AuthorIcon href="/articlenews">
                        <FontAwesomeIcon icon={faChevronRight} />
                      </AuthorIcon>
                    </AuthorInfo>
                  </div>
                </NewsCard>
              </div>
            ))}
            </div>
      </div>
          </NewsItemContainer>
        
      <PaginationContainer>
        <div className="page-controls ">
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            &nbsp;
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
        <div className="page-controls ">
          <button 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </PaginationContainer>
    </NewsSection>
  );
};

export default News;