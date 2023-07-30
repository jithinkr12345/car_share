import * as React from 'react';
import {Link, useHistory} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CarImage from "../assets/images/card1.jpg";
import { Button, CardActionArea, CardActions } from '@mui/material';

import { blue } from '@mui/material/colors';

function MultiActionAreaCard() {


    // const history = useHistory();

    // const handleClick = () => {
    //   // Perform any necessary actions before redirection
     
  
    //   // Redirect to another page
    //   history.push('/driver');
    // };


  return (
    <Card sx={{ maxWidth: 345 }}>

      <CardActionArea>
        <CardMedia
          component="img"
         margin="10px"
          width="150"
          image={CarImage}
          alt="Car_image"
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            <p style={{color:'Blue'}}> TELL US ABOUT YOURSELF  </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p style={{fontFamily:'bold'}}> To qualify you must be 21 years of age and have a vehicle that meets the following requirements: </p>

           <p> 1. Your car must be 2013 or Newer </p>
           <p> 2. Four Doors </p>
           <p> 3. Not Salvaged </p>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Button size="Medium" color="primary">
        <Link to={'/driverdetails'}>
          Continue
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default MultiActionAreaCard;