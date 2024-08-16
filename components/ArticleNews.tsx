
import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

interface Author {
  image: string;
  name: string;
  date: string;
}

interface NewsData {
  title: string;
  paragraph: string;
  author: Author;
  image: string;
  content: string;
}

interface NewsProps {
  news: NewsData;
}

const Container = styled.div`
  padding-top: 9%;

  @media (max-width: 768px) {
    padding-top: 25%;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h6{
    color: #00816d;
    font-size: 20px;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const Title = styled.h2`
  font-size: 27px;
  font-weight: 800;
  color: #171D1C;
  margin: 20px;
`;

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #5D6160;
  margin: 0;
 
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 

  img {
    border-radius: 50%;
    margin-right: 15px;
    width: 50px;
    height: 50px;
  }

  h5 {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 700;
    color: #171D1C;
  }

  p {
    margin-bottom: 0;
    font-size: 16px;
    font-weight: 500;
    color: #5D6160;
  }
`;

const ArticleImage = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0;

  img {
    border-radius: 60px;
    width: 100%;
    height: 420px;
    object-fit: cover;
  }
`;

const ArticleContent = styled.div`
  text-align: center;
`;



const ArticleNews: React.FC<NewsProps> = ({ news }) => {
  if (!news) {
    return <p>No news data available.</p>; // Display a message if no news data
  }

  return (
    <Container className='container-fluid p-150'>
      <Header>
        <h6>News & insights</h6>
        <Title>{news.title}</Title>
        <Paragraph>{news.paragraph}</Paragraph>
      </Header>
      <AuthorInfo>
        <img src={news.author.image} alt={news.author.name} />
        <div>
          <h5>{news.author.name}</h5>
          <p>{news.author.date}</p>
        
        </div>
      </AuthorInfo>
      <ArticleImage>
        <img src={news.image} alt="Article" />
      </ArticleImage>
      <ArticleContent>
        <p>{news.content}</p>
      </ArticleContent>
      
    </Container>
  );
}

export default ArticleNews;
