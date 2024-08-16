import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRating from './StarRating'; 

const SubscribeContainer = styled.div`
  padding-top: 10%;

  @media (max-width: 768px) {
    padding-top: 23%;
  }
`;

const Highlight = styled.span`
  color: #00816d;
  font-size: 46px;
  font-weight: 800;
`;

const NewsRow = styled.div`
  display: flex;
  align-items: center;
`;

const NewsColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StarRatingWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

const BoxNews = styled.div`
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  padding: 35px 40px;
  border-radius: 35px;
  background-color: #ffffff;
  z-index: 1 !important;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const BoxNewsTitle = styled.h2`
  font-size: 18px; 
  font-weight: 700;
  color: #171D1C; 
  margin-bottom: 20px; 
`;

const NewsTitle = styled.h2`
  font-size: 48px;
  font-weight: 800;
  color: #171d1c;

  & > span {
    color: #00816d;
  }
`;

const SubscribeButton = styled.button`
  display: inline-block;
  text-align: center;
  background-color: #00816d;
  border-radius: 84px;
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
  width: 100%;
  padding: 12px;
  border: none;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    color: #171D1C;
    font-weight: 600;
  }
`;

const EmailInput = styled.input`
  width: 100%;
  padding: 12px;
  border-radius: 20px;
  border: none;
  background-color: #F3F4F4;
  margin-bottom: 20px;

  ::placeholder {
    color: #5D6160;
    font-size: 16px;
    font-weight: 500;
  }

  &:focus {
    outline: none; 
  }
`;

const News: React.FC<{ title: string }> = ({ title }) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    
    const isValidEmail = (email: string): boolean => {
   
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
      
      const handleSubscribe = async () => {
        if (!isValidEmail(email)) {
          setError('Please enter a valid email address.');
          return;
        }
      
        try {
          const response = await fetch('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/subscribe', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, type: 'job' }),
            });
      
          // Log the response status for debugging
          console.log('Response status:', response.status);
      
          // Parse the response data as JSON
          const data = await response.json();
          console.log('Parsed response data:', data);
      
          if (response.ok) {
            // Handle success
            if (data.email) {
              alert('Subscription successful!');
              setEmail('');
              setError(null);
            } else {
              setError('Unexpected response format.');
            }
          } else {
            // Handle failure
            if (data.message === 'error' && data.data?.email) {
              setError(data.data.email.join(', ')); // Combine all error messages if needed
            } else {
              setError('An error occurred while subscribing.');
            }
          }
        } catch (error) {
          console.error('Fetch error:', error);
          setError('An error occurred while subscribing.');
        }
      };
      
      

    return (
      <SubscribeContainer className="container-fluid p-100">
        <NewsRow className="row">
        <NewsColumn className="col-md-7 media-news">
        <NewsTitle dangerouslySetInnerHTML={{ __html: title }} />
          <StarRatingWrapper>
            <StarRating />
          </StarRatingWrapper>
        </NewsColumn>

          <div className="col-md-5">
            <BoxNews>
              <BoxNewsTitle>
                Sign up to our newsletter to stay updated
              </BoxNewsTitle>
              <div className="form-group">
                <EmailInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email"
                />
                {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
              </div>
              <SubscribeButton
                onClick={handleSubscribe}
                data-aos="fade-up"
                data-aos-duration="1100"
              >
                Subscribe
              </SubscribeButton>
            </BoxNews>
          </div>
        </NewsRow>
      </SubscribeContainer>
    );
  };
  
export default News;
