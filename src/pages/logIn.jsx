import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../assets/css/login.css";
import Cookies from 'universal-cookie';
import '../assets/css/login1.css';
import logoimg from '../assets/images/logo1.png';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState('');

  //   const handleEmailChange = (e) => {
  //     setEmail(e.target.value);
  //   };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    if (!email || !password) {
      setFormError('Please fill in all fields.');
    }
    else {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/users/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          // credentials: 'include',
          body: JSON.stringify(
            {
              "username": e.target.email.value,
              "password": e.target.password.value
            }
          )
        });
        const body = await response.text();
        const result = JSON.parse(body);
        if (response.ok == false) {
          throw Error(body);
        }
        cookies.set('jwt', result.jwt);
        setFormError('');
        navigate("/dashboard");
      }
      catch (e) {
        alert(e);
      }
    }

  };

  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column ms-5">
            <div className="text-center">
              <img src={logoimg} style={{ width: '185px' }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">WELCOME TO RoadRunner</h4>
            </div>
            <p>Please login to your account</p>

            <form onSubmit={handleSubmit}>
              <MDBInput
                wrapperClass='mb-4'
                label='Email address'
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MDBInput
                wrapperClass='mb-4'
                label='Password'
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {formError && <p className="text-danger">{formError}</p>}

              <div className="text-center pt-1 mb-5 pb-1">
                <MDBBtn type="submit" className="mb-4 w-100 gradient-custom-2 no-hover">
                  Sign in
                </MDBBtn>
                <a className="text-muted" href="#!">Forgot password?</a>
              </div>
            </form>
          </div>
        </MDBCol>

        <MDBCol col='6' className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">"Ride with the Best, Arrive as a Guest"</h4>
              <p className="small mb-0">
                "Welcome to our premier taxi service, where riding with the best guarantees an experience fit for esteemed guests like yourself.
                With our commitment to excellence and unmatched reliability, embark on journeys that leave lasting impressions.
                Join us now and let our top-tier drivers take you to your destination with utmost comfort and care."
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
