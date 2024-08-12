'use client';

import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterContainer = styled.footer`
  padding-top: 45px;
  background-color: #171D1C;
  margin-top:25px;
`;

const FooterLogo = styled.div`
  text-align: center;
`;

const LogoImage = styled.img`
width: auto;
height: 80px;
`;

const SectionTitle = styled.h6`
  margin-top: .5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  font-size: 18px;
  line-height:1.5;
  color:#8B8E8D;
`;

const LinkItem = styled.p`
  margin: .8rem 0;
  a {
    color: #FFFFFF;
    font-weight:400;
    text-decoration: none;
    &:hover {
      color:#8B8E8D;
    }
  }
`;


const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start; 
  gap: 1rem; 
  margin-top: 1rem;
  margin-bottom: 1rem;

  svg {
  fill: #171d1c;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
 padding:6px 11px;
  }
`;

const DevelopedBy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration:none;
  color:#ffffff;
  font-size:13px;
  padding-bottom:10px;

  svg {
    margin: 0 5px;
  }
  p {
    margin: 0 10px;
    text-decoration:none;
    color:#ffffff !important;
    font-size:14px;
  }

  @media (max-width: 768px) {
    font-size:8px;

   }
`;

const FooterLine = styled.div`
  width: 100%;
  height: 1px;
  background: #454A49;
  margin: 20px 0;
`;

const CopyrightPolicy = styled.div`
  padding: 15px 0;
  color: #ffffff; /* Change this to the color you want */
  font-size: 14px;
  
  a {
    color: #ffffff; /* Change this to the color you want */
    text-decoration: none;
    &:hover {
      color: #8B8E8D; /* Change this to the hover color you want */
    }
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div className="container-fluid p-100">
        <div className="row">
                <div className="col-md-2">
          <a href="https://your-target-url.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <FooterLogo>
              <LogoImage
                src="/FooterLogo.png"
                alt="Logo"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-offset="10"
              />
              <SectionTitle data-aos="fade-up" data-aos-duration="700" data-aos-offset="10">
                Your Gateway to <br /> Modern Banking
              </SectionTitle>
            </FooterLogo>
          </a>
        </div>
          
          <div className="col-md-2">
            <SectionTitle>Overview</SectionTitle>
            {["Home", "About", "News", "Podcast and Magazine", "Careers", "Contact"].map((item, index) => (
              <LinkItem key={index} data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
                <a href="#">{item}</a>
              </LinkItem>
            ))}
          </div>
          <div className="col-md-2">
            <SectionTitle>Consumer</SectionTitle>
            {["Top-Up Bills", "Installments", "Membership", "Renewal Subscriptions", "Gaming e-vouchers", "Tuition & Fees", "Loans & Grants", "Tickets", "Donations"].map((item, index) => (
              <LinkItem key={index} data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
                <a href="#">{item}</a>
              </LinkItem>
            ))}
          </div>
          <div className="col-md-2">
            <SectionTitle>Industry</SectionTitle>
            {["Government", "Utilities", "Education", "Charity", "Financial Services", "Business Collection", "Clubs", "Transportation", "Banking"].map((item, index) => (
              <LinkItem key={index} data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
                <a href="#">{item}</a>
              </LinkItem>
            ))}
          </div>
          <div className="col-md-2">
            <SectionTitle>Payment Solution</SectionTitle>
            {["Momkn Pay", "Momkn App", "Point of Sale"].map((item, index) => (
              <LinkItem key={index} data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
                <a href="#">{item}</a>
              </LinkItem>
            ))}
          </div>
          <div className="col-md-2">
            <SectionTitle>Contact Us</SectionTitle>
            <LinkItem data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
              <a href="mailto:info@alahlymomkn.com">info@alahlymomkn.com</a>
            </LinkItem>
            <LinkItem data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
              <a href="tel:16379">16379</a>
            </LinkItem>
            <LinkItem data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
              <a href="#">
                12 G Ahmed Kamel St., <br />
                from Lasilky St. Maadi, <br />
                Cairo, Egypt 5th floor
              </a>
            </LinkItem>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <SocialIcons>
              <a data-aos="fade-up" data-aos-duration="600" data-aos-offset="10" href="#">
                <svg width="13" height="25" viewBox="0 0 13 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.55712 24.6295H3.87389V12.9548H0.683594V9.15379H3.87377V6.44908C3.87377 3.24398 5.28479 0.945312 9.95533 0.945312C10.9432 0.945312 12.494 1.14442 12.494 1.14442V4.6739H10.8651C9.20539 4.6739 8.55736 5.17875 8.55736 6.57448V9.15379H12.4319L12.0868 12.9548H8.55724L8.55712 24.6295Z"
                    fill="#171D1C"
                  />
                </svg>
              </a>
              <a data-aos="fade-up" data-aos-duration="600" data-aos-offset="10" href="#">
              <svg width="22" height="22" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.949219 3.39907C0.949219 2.68782 1.19816 2.10105 1.69602 1.63877C2.19388 1.17646 2.84112 0.945312 3.6377 0.945312C4.42006 0.945312 5.05305 1.17289 5.5367 1.6281C6.03456 2.09751 6.2835 2.70916 6.2835 3.46308C6.2835 4.14587 6.04169 4.71484 5.55804 5.17004C5.06018 5.63946 4.40583 5.87417 3.59502 5.87417H3.57369C2.79132 5.87417 2.15833 5.63946 1.67468 5.17004C1.19103 4.70063 0.949219 4.1103 0.949219 3.39907ZM1.2266 22.069V7.81584H5.96344V22.069H1.2266ZM8.58791 22.069H13.3248V14.1103C13.3248 13.6124 13.3817 13.2283 13.4954 12.9581C13.6946 12.4744 13.9969 12.0654 14.4023 11.7312C14.8077 11.3969 15.3162 11.2298 15.9279 11.2298C17.5211 11.2298 18.3176 12.3037 18.3176 14.4517V22.069H23.0545V13.8969C23.0545 11.7916 22.5566 10.1949 21.5609 9.10673C20.5651 8.01854 19.2494 7.47444 17.6135 7.47444C15.7785 7.47444 14.3489 8.26391 13.3248 9.84285V9.88553H13.3034L13.3248 9.84285V7.81584H8.58791C8.61635 8.27102 8.63058 9.68637 8.63058 12.0619C8.63058 14.4374 8.61635 17.7731 8.58791 22.069Z" fill="#171D1C"></path>
                    </svg>
                    </a>
                    <a data-aos="fade-up" data-aos-duration="600" data-aos-offset="10" href="#">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.6136 1.84325C18.7097 1.73338 18.7832 1.60567 18.8299 1.46739C18.8766 1.32912 18.8957 1.183 18.8859 1.03737C18.8762 0.891747 18.8378 0.749467 18.7731 0.618656C18.7083 0.487846 18.6185 0.371067 18.5086 0.274987C18.3987 0.178908 18.271 0.105409 18.1327 0.058688C17.9945 0.0119667 17.8484 -0.00706232 17.7027 0.00268739C17.5571 0.0124371 17.4148 0.0507748 17.284 0.115511C17.1532 0.180248 17.0364 0.270115 16.9403 0.379983L11.2628 6.86858L6.44415 0.444424C6.34066 0.306435 6.20646 0.194436 6.05219 0.117298C5.89791 0.0401593 5.72779 0 5.5553 0H1.11106C0.904724 0 0.702463 0.0574581 0.526942 0.165936C0.351421 0.274414 0.209575 0.429626 0.117298 0.614179C0.0250214 0.798733 -0.0140403 1.00534 0.00448998 1.21084C0.0230202 1.41634 0.0984103 1.61263 0.222213 1.7777L7.37411 11.3128L1.38549 18.157C1.28941 18.2668 1.21591 18.3945 1.16919 18.5328C1.12247 18.6711 1.10344 18.8172 1.11319 18.9628C1.12294 19.1085 1.16128 19.2507 1.22602 19.3815C1.29075 19.5124 1.38062 19.6291 1.49049 19.7252C1.60036 19.8213 1.72807 19.8948 1.86634 19.9415C2.00462 19.9882 2.15074 20.0073 2.29636 19.9975C2.44199 19.9878 2.58427 19.9494 2.71508 19.8847C2.84589 19.82 2.96267 19.7301 3.05875 19.6202L8.73627 13.1305L13.5549 19.5547C13.6584 19.6927 13.7926 19.8047 13.9469 19.8818C14.1012 19.9589 14.2713 19.9991 14.4438 19.9991H18.888C19.0944 19.9991 19.2966 19.9416 19.4722 19.8332C19.6477 19.7247 19.7895 19.5695 19.8818 19.3849C19.9741 19.2004 20.0131 18.9938 19.9946 18.7883C19.9761 18.5828 19.9007 18.3865 19.7769 18.2214L12.625 8.68627L18.6136 1.84325Z" fill="#171D1C"></path>
                    </svg>
                    </a>
                    <a data-aos="fade-up" data-aos-duration="600" data-aos-offset="10" href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.4981 6.18667C23.3558 5.59544 23.0814 5.05166 22.7042 4.60125C22.327 4.15083 21.8593 3.80577 21.3394 3.59667C19.5128 2.91667 11.9781 2.91667 11.9781 2.91667C11.9781 2.91667 4.44343 2.91667 2.61681 3.59667C2.09693 3.80577 1.6292 4.15083 1.25203 4.60125C0.874854 5.05166 0.600412 5.59544 0.458104 6.18667C-0.122896 8.11067 -0.122896 12.0007 -0.122896 12.0007C-0.122896 12.0007 -0.122896 15.8897 0.458104 17.8137C0.600412 18.4049 0.874854 18.9487 1.25203 19.3991C1.6292 19.8495 2.09693 20.1946 2.61681 20.4037C4.44343 21.0837 11.9781 21.0837 11.9781 21.0837C11.9781 21.0837 19.5128 21.0837 21.3394 20.4037C21.8593 20.1946 22.327 19.8495 22.7042 19.3991C23.0814 18.9487 23.3558 18.4049 23.4981 17.8137C24.0791 15.8897 24.0791 12.0007 24.0791 12.0007C24.0791 12.0007 24.0791 8.11067 23.4981 6.18667ZM9.61561 15.4967V8.50467L15.9756 12.0007L9.61561 15.4967Z" fill="#171D1C"></path>
                    </svg>
                    </a>
            </SocialIcons>
          </div>
        </div>
        <FooterLine className="footer-line mt-3" />
        <div className="row copy-policy">
          <div className="col-md-6 text-md-start">
          <CopyrightPolicy data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
              <a href="#">Copyrights</a>
            </CopyrightPolicy>
          </div>
          <div className="col-md-6 text-md-end">
          <CopyrightPolicy data-aos="fade-up" data-aos-duration="500" data-aos-offset="10">
              <a href="#">Policy | Cookies</a>
            </CopyrightPolicy>
          </div>
        </div>
        
        <FooterLine className="footer-line2 mb-3" /> 
    
        <div className="row">
          
          <div className="col-md-12">
            <DevelopedBy>
              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.499634" width="12" height="12" rx="3" fill="#00816D" />
              </svg>
              <p>
                © 2024, All Rights Reserved - Developed and Designed by 
                <a
                  href="https://your-intcore-url.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: '#8B8E8D', 
                    textDecoration: 'none', 
                    marginLeft: '5px',
                    fontWeight: 600 
                  }}
                >
                  INTCORE
                </a>
              </p>

              <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.499634" width="12" height="12" rx="3" fill="#00816D" />
              </svg>
            </DevelopedBy>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
