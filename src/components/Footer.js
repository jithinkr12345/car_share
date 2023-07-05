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



import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}


export default Footer;


