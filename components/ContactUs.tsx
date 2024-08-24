import { GetServerSideProps } from 'next';
import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import StarRating from '../components/general/StarRating'; 
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Link from 'next/link';


// Styled-components
const BodyWrapper = styled.div`

  .contact-section {
    background-image: url('/contact-bg.png');
    background-size: cover;
    background-position: center;
    padding: 120px 0;

    .contact-details {
      h2 {
        font-size: 58px;
        font-weight: 800;
        color: #171d1c;
      }
      h2 span{
        color: #00816D;
      }
      .contact-content {
        display: flex;
        flex-direction: column;
        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          .contact-info {
            margin-left: 20px;
            
            h3 {
              color: #171d1c;
              font-size: 20px;
              font-weight: 650;
              margin-bottom: 10px;
              margin-top: 5px;
            }
            p {
              color: #5d6160;
              font-size: 17px;
              font-weight: 500;
              margin-bottom: 8px;
              max-width:280px;
            }
          }
        }
      }
    }
    
    .Alahly-contact-form {
      .frame-details {
        border-radius: 60px;
        background-color: #ffffff;
        padding: 40px;
      }
      .custom-input::placeholder {
        color: #5d6160;
        font-size: 14px;
        font-weight: 500;
        padding-left: 15px;
      }
      .frame-name .form-label {
        margin-top: 10px;
      }
      
      .custom-input {
        width: 100%;
        padding: 15px;
        background-color: #f3f4f4;
        border-radius: 20px;
        font-size: 16px;
        border: none;
        margin-bottom: 10px;
      }
      
      .form-label {
        font-size: 16px;
        font-weight: 700;
        color: #171d1c;
      }
      
      .custom-input:focus {
        outline: none;
      }
      @media (max-width: 767px) {
        .contact-details h2 {
          font-size: 35px;
          padding-top: 20%;
        }
        .Alahly-contact-form {
          padding-top: 10%;
        }
        .form-label {
          font-size: 15px;
        }
        .submit-button-contact {
          font-size: 15px;
        }
          
          }
          .btn.submit-button-contact {
            padding: 15px 60px;
            background-color: #00816D;
            color: white;
            border: none;
            cursor: pointer;
            width:100%;
            border-radius:84px
          }
          .frame-message .custom-input{
            height:150px;
          }
      
        }
      }
    }
  }
  
`;

const ContactIconWrapper = styled.div`
width: 73px;
height: 73px;
padding: 23px;
background-color: white;
border-radius: 14px;

  svg {
    font-size: 24px;
    color: #171d1c;
  }
`;

const GetDirection = styled(Link)`
  font-size: 18px;
  color: #171d1c; 
  font-weight: 500;
  text-align: left; 
  margin-left:85px;
  text-decoration:underline;
`;
// Interface for contact data
interface ContactInfo {
  title: string;
  description: string;
}

interface ContactData {
  info: ContactInfo[];
}

interface AboutPageProps {
  contactData: ContactData;
}

// Custom validation function
const validateForm = (values: any) => {
  const errors: { [key: string]: string } = {};
  
  if (!values.name) {
    errors.name = 'Name is required';
  }
  
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  
  if (!values.message) {
    errors.message = 'Message is required';
  }
  
  return errors;
};

const ContactUs: React.FC<{ contactData: ContactData }> = ({ contactData }) => (
  <section className="contact-section">
    <div className="container-fluid p-100">
      <div className="row">
        {/* left content */}
        <div className="col-md-6 contact-details">
  <h2>Reach out <br /> to <span className="us-text">us</span></h2>
  <div className="contact-content d-flex align-items-left align-items-start mt-5">
    {contactData.info.map((item, index) => (
      <div key={index} className="contact-item d-flex align-items-center mb-4">
       
       <ContactIconWrapper>
       {index === 1 && <FaEnvelope />}
      {index === 0 && <FaPhone />}
      {index === 2 && <FaMapMarkerAlt />}
      </ContactIconWrapper>
        
        <div className="contact-info mt">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
      <GetDirection href="/your-link-url">Get Direction</GetDirection>
    <StarRating />
  </div>
</div>


        {/* right content */}
        <div className="col-md-6 Alahly-contact-form">
          <div className="frame-details">
            <div className="frame-form">
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validate={validateForm}
                onSubmit={(values, { resetForm }) => {
                  console.log(values);
                 
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="frame-name mb-3">
                      <label htmlFor="name" className="form-label">Name</label>
                      <Field type="text" className="custom-input" id="name" name="name" placeholder="Enter your name" />
                      <ErrorMessage name="name" component="div" className="text-danger" />
                    </div>
                    <div className="frame-email mb-3">
                      <label htmlFor="email" className="form-label">Email address</label>
                      <Field type="email" className="custom-input" id="email" name="email" placeholder="Enter your email address" />
                      <ErrorMessage name="email" component="div" className="text-danger" />
                    </div>
                    <div className="frame-message mb-3">
                      <label htmlFor="message" className="form-label">Message</label>
                      <Field as="textarea" className="custom-input" id="message" name="message" placeholder="Enter your message" />
                      <ErrorMessage name="message" component="div" className="text-danger" />
                    </div>
                    <button type="submit" className="btn submit-button-contact mt-3">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About: React.FC<AboutPageProps> = ({ contactData }) => (
  <BodyWrapper>
    <ContactUs contactData={contactData} />
  </BodyWrapper>
);

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios.get('https://d30e66be-80b3-4ca0-82a3-e473ba6138c0.mock.pstmn.io/api/v1/contact-us', {
      headers: {
        'Accept-Language': 'en',
      },
    });

    return {
      props: {
        contactData: response.data.data || { info: [] },
      },
    };
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return {
      props: {
        contactData: { info: [] },
      },
    };
  }
};

export default About;
