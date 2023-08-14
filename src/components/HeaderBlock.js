import React from "react";
import styled from 'styled-components';
import carridevideo from '../assets/images/video_footage_of_city.mp4';
import { Container, Link } from "@mui/material";
import { MdArrowRightAlt } from "react-icons/md";
// import { MdArrowRightAlt } from '@mui/icons-material';


const HeaderContainer = styled.header`
  position: relative;
  background-color: #2b334a;
  box-shadow: 5px 10px 8px 10px #888888;
  padding: 10;
  overflow: hidden;
  display: flex;
  align-items: center;
`;


const VideoContainer = styled.div`
  flex: 1;
  padding:10px;
  margin: 5px;
  `;

const Card = styled.div`
  position: absolute;
  // background-color: transparent;
  background: linear-gradient(to left, #277365, #e9bb13);
  padding: 80px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  text-align: center;
  right: 40px; /* Adjust the positioning */
  top: 45%;
  transform: translateY(-50%);
`;

const Button = styled.button`
margin: 5px;

`

export const HeaderBlock = () => {
  return (
    <HeaderContainer>
      <VideoContainer>
        <video width="950" height="500" autoPlay loop muted>
          <source src={carridevideo} type="video/mp4"/>
        </video>
      </VideoContainer>
      <Card>
        <h2 style={{fontFamily:"Borel", color: "#ffff"}}>Welcome RoadRunners</h2>
        <div>
          <Button> Looking for Ride</Button>
          <Button> Login As Driver</Button>

        </div>
        
      </Card>

    

    </HeaderContainer>

  );
}

export const Main = () => {
  return(
    <Container>
      <h1 style={{padding:"25px"}}>We have your back </h1>
   When you drive with RoadRunner, you're part of a community that prioritizes safety on the road. 
   We have tools in the app for you to get help easily, if you ever need it. 
   And we’re looking out for your well-being before, during, and after every ride.

   <Link>
   <h4> See how you're protected <MdArrowRightAlt /></h4> 
   </Link>

    </Container>
  )
}


