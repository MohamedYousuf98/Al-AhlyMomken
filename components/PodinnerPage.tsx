import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Author {
  name: string;
  image: string;
}

interface Podcast {
  id: string;
  title: string;
  short_description: string;
  author?: Author;
  date: string;
  sound_title: string;
  sound_sub_title: string;
  apple_link?: string;
  spotify_link?: string;
  anghami_link?: string;
  youtube_link?: string;
  soundcloud_link?: string;
  facebook_link?: string;
  voice_image: string;
  home_background_image: string;
  home_image_title: string;
  home_image_sub_title: string;
  transcript: string;
  voice: string;
  description: string;
  name: string;
  image: string;
}

const Container = styled.div`
  padding: 120px 0;
`;

const ArticleHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const HeaderTitle = styled.h6`
  color: #00816d;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const NewsInsightText = styled.h2`
  font-size: 30px;
  font-weight: 800;
  color: #171d1c;
  margin-top: 25px;

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const NewsInsightParagraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #5d6160;
  margin-top: 25px;
  line-height: 1.8;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AuthorInfoArticle = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AuthorImage = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const AuthorDetailsArticle = styled.div`
  text-align: left;
`;

const DataDrivenContent = styled.div`
  margin-top: 60px;
`;

const ListenNowButton = styled.a`
  font-size: 19px;
  color: #5d6160;
  margin-right: 10px;
  font-weight: 500;
  color: #003830;
  margin-left: 10px;
  text-decoration: underline;

  &:hover {
    color: #00575b; 
  }

  svg {
    background-color: #003830;
    border-radius: 50%;
    padding: 12px;
    color: #ffffff;
    align-items: center;
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
`;

const MediaLinks = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 0px;

  a {
    display: block;
    width: 40px;
    height: 40px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    text-decoration: none;
    transition: background-color 0.3s;
  }
`;

const PodcastImage = styled.img`
position:relative;
width: 62px;
height: 62px;
left:95px;
top:10px;

`;
const Title = styled.h3`
  font-size: 32px;
  font-weight: 700;
  color: #003830; 
  margin-bottom: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @media (max-width: 768px) {
    font-size: 16px;
    display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  }
  
`;

const SubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #5D6160; 
  margin-bottom: 35px;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
 
  @media (max-width: 768px) {
    font-size: 13px;
    display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  }
`;

const ContentDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #5D6160; 
  text-align:center;
  justify-content:center;
 padding-right:140px;
 padding-left:140px;
 margin-top:8%;

 @media (max-width: 768px) {
  padding-right:20px;
  padding-left:20px;
  margin-top:11%;
}
`;

const ReadTranscriptLink = styled.a`
  font-size: 18px;
  font-weight: 500;
  color: #003830; 
  text-decoration: underline;
  margin-bottom:5px;


  &:hover {
    color: #00575b; 
  }
`;
// Styled-components to control specific styles
const BackgroundImageContainer = styled.div<{ backgroundImage: string }>`
  background-image: url(${(props) => props.backgroundImage});
  width:283px;
  height: 283px;
  background-size: cover;
  border-radius: 30px;

margin-bottom:25px;
position:relative;

@media (max-width: 768px) {
  margin-right:0px;
}
`;

const ImageContent = styled.div`
position: relative;
top: 80px;
right: 55px;
color: #ffffff;
padding: 20px;
padding-left:40px;
text-decoration:none;
`;

const ImageTitle = styled.h5`
font-size: 23px;
font-weight: 300;
letter-spacing: 3%;
text-transform: uppercase;
color: #ffffff;
line-height: 0.9;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;


&:hover {
  color: #000000; 
}
`;

const ImageSubTitle = styled.h4`
font-size: 38px;
font-weight: 500;
letter-spacing: 13%;
text-transform: uppercase;
display: -webkit-box;
-webkit-line-clamp: 1;
-webkit-box-orient: vertical;
overflow: hidden;


&:hover {
  color: #000000; 
}
`;

const CustomLink = styled.a`
  text-decoration: none; 
  color: inherit; 
  
  &:hover {
    color: #000000; 
  }
`;

const PodinnerSection = styled.div`
box-shadow: 0px 6px 24px 0px #0000000F;
border-radius: 60px;
padding:0px 25px 25px 25px;
display:flex;
align-items:center;
justify-content:center;
margin-top:5%;

@media (max-width: 768px) {
  padding:20px 50px;
}
`;


const PodinnerPage: React.FC<{ Podcastinner: Podcast }> = ({ Podcastinner }) => {
  if (!Podcastinner) {
    return <p>No podcast data available.</p>;
  }

  return (
    <Container className="container-fluid p-100">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8">
          <ArticleHeader>
            <HeaderTitle data-aos="fade-up" data-aos-duration="600">Podcast</HeaderTitle>
            <NewsInsightText data-aos="fade-up" data-aos-duration="800">{Podcastinner.title}</NewsInsightText>
            <NewsInsightParagraph data-aos="fade-up" data-aos-duration="1000">
              {Podcastinner.short_description}
            </NewsInsightParagraph>
          </ArticleHeader>
          {Podcastinner.author && (
            <AuthorInfoArticle data-aos="fade-up" data-aos-duration="1000">
              <AuthorImage src={Podcastinner.author.image || '/default-author.png'} alt={Podcastinner.author.name || 'Author'} />
              <AuthorDetailsArticle>
                <h5>{Podcastinner.author.name}</h5>
                <p>{Podcastinner.date}</p>
              </AuthorDetailsArticle>
            </AuthorInfoArticle>
          )}
        </div>
      </div>
      <PodinnerSection>
      <div className="row justify-content-center mt-5">
        
        <div className="col-12 col-md-3">
          <BackgroundImageContainer backgroundImage={Podcastinner.home_background_image}>
            <div className="text-center my-3">
              <a href={Podcastinner.home_background_image}>
                <PodcastImage
                  src={Podcastinner.voice_image}
                  alt="Podcast Image"
                  className="img-fluid rounded mb-3"
                />
              </a>
              
              <CustomLink href={Podcastinner.voice}>
                <div>
                <ImageContent>
                  <ImageTitle>{Podcastinner.home_image_title}</ImageTitle>
                  <ImageSubTitle>{Podcastinner.home_image_sub_title}</ImageSubTitle>
                  </ImageContent>
                </div>
              </CustomLink>
            </div>
          </BackgroundImageContainer>
        </div>
        <div className="col-12 col-md-9">
          <DataDrivenContent>
            <Title>{Podcastinner.sound_title}</Title>
            <SubTitle>{Podcastinner.sound_sub_title}</SubTitle>
            <div className="d-flex flex-column flex-md-row align-items-center gap-3">
              <ListenNowButton href={Podcastinner.voice} data-aos="fade-up" data-aos-duration="1000">
                <svg width="62" height="62" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M0.724532 1.96644C0.746871 1.77714 0.813105 1.59568 0.917959 1.4365C1.02281 1.27732 1.16339 1.14483 1.32849 1.04957C1.49359 0.954314 1.67865 0.898928 1.86894 0.887822C2.05922 0.876716 2.24947 0.910198 2.42453 0.985602C3.30953 1.36394 5.29286 2.2631 7.80953 3.7156C10.327 5.16893 12.0979 6.4381 12.867 7.01393C13.5237 7.50643 13.5254 8.4831 12.8679 8.97727C12.1062 9.54977 10.357 10.8023 7.80953 12.2739C5.25953 13.7456 3.29953 14.6339 2.42286 15.0073C1.66786 15.3298 0.822865 14.8406 0.724532 14.0264C0.609532 13.0748 0.394531 10.9139 0.394531 7.9956C0.394531 5.07893 0.608698 2.91894 0.724532 1.96644Z" fill="white"/>
                </svg>
                Listen Now
              </ListenNowButton>
              <div className="divider" data-aos="fade-up" data-aos-duration="1000"></div>
              <ReadTranscriptLink href={Podcastinner.transcript} data-aos="fade-up" data-aos-duration="1000">Read Transcript</ReadTranscriptLink>
              <span data-aos="fade-up" data-aos-duration="1000" className="ms-3">or listen on:</span>
              <MediaLinks>
                {Podcastinner.apple_link && <a href={Podcastinner.apple_link} style={{ backgroundImage: `url(${Podcastinner.apple_link})` }}></a>}
                {Podcastinner.spotify_link && <a href={Podcastinner.spotify_link} style={{ backgroundImage: `url(${Podcastinner.spotify_link})` }}></a>}
                {Podcastinner.anghami_link && <a href={Podcastinner.anghami_link} style={{ backgroundImage: `url(${Podcastinner.anghami_link})` }}></a>}
                {Podcastinner.soundcloud_link && <a href={Podcastinner.soundcloud_link} style={{ backgroundImage: `url(${Podcastinner.soundcloud_link})` }}></a>}
                {Podcastinner.youtube_link && <a href={Podcastinner.youtube_link} style={{ backgroundImage: `url(${Podcastinner.youtube_link})` }}></a>}
                {Podcastinner.facebook_link && <a href={Podcastinner.facebook_link} style={{ backgroundImage: `url(${Podcastinner.facebook_link})` }}></a>}
               
               
              </MediaLinks>
            </div>
          </DataDrivenContent>
        </div>
      </div>
      </PodinnerSection>
      <ContentDescription>
      {Podcastinner.description}
      </ContentDescription>
    </Container>
  );
};

export default PodinnerPage;
