// components/Magazine.tsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { fetchMagazines } from '../utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



interface MagazineData {
  id: string;
  image: string;
  home_title: string;
  home_description: string;
  pdf: string;
}

interface MagazineResponse {
  message: string | null;
  data: {
    magazines: MagazineData[];
  };
  code: number;
}

// Styled components
const MagazineTitle = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #171D1C;
  margin-bottom:25px;

  @media (max-width: 768px) {
    margin-left:10px;
  }
`;


const MagazineItemContainer = styled.div`
  padding: 20px 0;
`;

const MagazineCard = styled.div`
  margin-bottom: 20px;
  border: none;
`;

const HorizontalLine = styled.div`
width: 100%;
height: .7px;
background-color:#E6E6E8; 
margin: 20px 0;

`;

const MagazineImage = styled.img`
  height: 280px;
  width: 100%;
  border-radius: 20px;
  object-fit: cover;
`;

const MagazineTitleStyled = styled.h2`
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
  text-underline: none !important;
  text-decoration: none !important;
`;

const MagazineDescription = styled.p`
  font-size: 16px;
  color: #5D6160;
  margin-bottom: 25px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CustomLink = styled.a`
  text-decoration: none; 
  color: inherit; 
  
  &:hover {
    color: #000000; 
  }
`;

const PdfLink = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center; 
  justify-content:space-between;
  font-size:16px;
  font-weight:600;
  color:#003830;


`;
const DownloadIcon = styled.a`
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
    color:#003830;
  }
  `;


const Magazine: React.FC = () => {
  const [magazines, setMagazines] = useState<MagazineData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: MagazineResponse = await fetchMagazines();
        setMagazines(data.data.magazines);
      } catch (error) {
        setError('Failed to load magazines');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <MagazineItemContainer>
      <div className="container">
        <MagazineTitle>Magazine</MagazineTitle>
        <div className="row">
          {magazines.map(item => (
            <div className="col-md-4" key={item.id}>
              <MagazineCard className="card">
                <a href="/articlemagazine">
                  <MagazineImage src={item.image} alt={item.home_title} className="card-img-top" />
                </a>
                <div className="card-body">
                  <CustomLink href="/articlemagazine">
                    <MagazineTitleStyled>{item.home_title}</MagazineTitleStyled>
                  </CustomLink>
                  <MagazineDescription>{item.home_description}</MagazineDescription>
                  <HorizontalLine></HorizontalLine>
                  <PdfLink href={item.pdf} target="_blank" rel="noopener noreferrer">
                  Download Magazine   
                  <DownloadIcon href="#">
                          <FontAwesomeIcon icon={faDownload} />
                  </DownloadIcon>
                </PdfLink>
                </div>
              </MagazineCard>
            </div>
          ))}
        </div>
      </div>
    </MagazineItemContainer>
  );
};

export default Magazine;
