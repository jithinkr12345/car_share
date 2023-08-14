// import React from 'react';
// import "../assets/css/footer.css";
// import gplay_icon from "../assets/images/Google_Play.png"
// import appstore_icon from "../assets/images/App_store.png"

// const Footer = () => {
//     return (
//         <footer style={{ backgroundColor: "black", color: "blue", paddingTop: '20px' }}>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <h5>About RoadRunner
//                         </h5>
//                         <p> We are the new growing company, We want to provide the best riding experience to user</p>
//                         <p>Case Studies</p>
//                         <p>Webinar</p>
//                         <p>Press Releases</p>
//                         <p>Job Offers</p>

//                     </div>

//                     <div className="col-md-3">
//                         <h5>Quick Link</h5>
//                         <p> Rider </p>
//                         <p> Driver </p>
//                         <p> About Us</p>
//                     </div>

//                     <div className="col-md-3">
//                         <h5>Contact Us</h5>
//                         <p>Email: roadrunner@example.com</p>
//                         <p>Phone: 123-456-7890</p>
//                     </div>

//                     <div className="col-md-3">
//                         <h5> Become a Driver</h5>
//                         <p> Partner Area</p>
//                         <p> Authorized Vehicles</p>
//                     </div>

//                     <div className="col-md-12">
//                         <img src={gplay_icon}></img>

//                     </div>
//                     <div className="col-md-12">
//                         <img src={appstore_icon}></img>

//                     </div>
//                     <div>
//                         <p style={{ fontFamily: 'sans-serif' }}>© Copyright-2023 by RoadRunner. All Rights Reserved.</p>
//                     </div>


//                 </div>

//             </div>
//         </footer>
//     );
// };



import React, { useState } from 'react';
import styled from 'styled-components';
import Icon1 from '../assets/images/FdIcon.png';
import Icon2 from '../assets/images/FdIcon1.png';
import Icon3 from '../assets/images/FdIcon2.png';


import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Container = styled.section`
  padding: 20px;
  background: #f0f0f0;
`;

const Slide = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  margin-bottom: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const QuoteCarousel = () => {
  const quotes = [
    {
      text: '“As a student, it’s hard to complete my class work around a schedule...',
      author: 'Harold',
      year: 'Driving with RoadRunner since 2020',
      imageUrl:Icon1,
    },
    {
      text: '“Driving with RoadRunner is the perfect way to make money and be there...',
      author: 'Timothy',
      year: 'Driving with RoadRunner since 2017',
      imageUrl: Icon2,
    },
    {
      text: '“I\'m a disabled Marine Corps veteran, and because of my disability...',
      author: 'Christine',
      year: 'Driving with RoadRunner since 2016',
      imageUrl: Icon3,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % quotes.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? quotes.length - 1 : prevSlide - 1
    );
  };

  return (
    <Container
      data-tracking-action="view"
      data-tracking-category="QuoteCarousel"
      data-tracking-label="Driver > Pink Paint > Driver Quotes"
      data-testid="section-undefined"
    >
      <div role="region" aria-roledescription="carousel" aria-label="Slides">
        <Slide>
          <Image src={quotes[currentSlide].imageUrl} alt={quotes[currentSlide].author} />
          <p>{quotes[currentSlide].text}</p>
          <p>— {quotes[currentSlide].author}</p>
          <p>{quotes[currentSlide].year}</p>
          <ButtonContainer>
            <button onClick={handlePrevSlide}>Previous</button>
            <button onClick={handleNextSlide}>Next</button>
          </ButtonContainer>
        </Slide>
      </div>
    </Container>
  );
};



export const Footer = () =>{
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
    <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      <div className='me-5 d-none d-lg-block'>
        <span> Get's Book a Safe Ride!!!</span>
      </div>

      <div>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="facebook-f"
          style={{ backgroundColor: '#3b5998' }} 
          />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="twitter"
          style={{ backgroundColor: '#55acee' }} 
          />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="google"
          style={{ backgroundColor: '#dd4b39' }}
           />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="instagram"
          style={{ backgroundColor: '#ac2bac' }}
           />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="linkedin"
          style={{ backgroundColor: '#0082ca' }}
           />
        </a>
        <a href='' className='me-4 text-reset'>
          <MDBIcon fab icon="github"
           style={{ backgroundColor: '#333333' }}
            />
        </a>
      </div>
    </section>

    <section className=''>
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>
              <MDBIcon icon="gem" className="me-3" />
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
              consectetur adipisicing elit.
            </p>
          </MDBCol>

          <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
            <p>
              <a href='' className='text-reset'>
                Book a Ride
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Book as Driver
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Promotions
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                
              </a>
            </p>
          </MDBCol>

          <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
            <p>
              <a href='#!' className='text-reset'>
                Pricing
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Settings
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Book History
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset'>
                Help
              </a>
            </p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
            <p>
              <MDBIcon icon="home" className="me-2" />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-3" />
              info@example.com
            </p>
            <p>
              <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      © 2021 Copyright:
      <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>
  );
}


