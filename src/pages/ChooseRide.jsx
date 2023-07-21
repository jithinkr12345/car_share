import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CarImage from "../assets/images/car.png";
import "../assets/css/chooseride.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >

  </Box>
);

const cardOne = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          margin="5px"
          height="70"
          image={CarImage}
          alt="Car Image"
        />
        <Box sx={{ display: "grid", margin: "0px 20px" }}>
          <Typography component="div" variant="h5">
            Regular
          </Typography>
          <Typography component="div" variant="h7">
            Arrives in 4min
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: "bold", margin: "0px auto" }}
          component="div"
          variant="h5"
        >
          $18.75
        </Typography>
      </Box>
    </CardContent>
  </React.Fragment>
);

const cardTwo = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          margin="5px"
          height="70"
          image={CarImage}
          alt="Car Image"
        />
        <Box sx={{ display: "grid", margin: "0px 20px" }}>
          <Typography component="div" variant="h5">
            Comfort
          </Typography>
          <Typography component="div" variant="h7">
            Arrives in 7min
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: "bold", margin: "0px auto" }}
          component="div"
          variant="h5"
        >
          $20.00
        </Typography>
      </Box>
    </CardContent>
  </React.Fragment>
);

const cardThree = (
  <React.Fragment>
    <CardContent>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          margin="5px"
          height="70"
          image={CarImage}
          alt="Car Image"
        />
        <Box sx={{ display: "grid", margin: "0px 20px" }}>
          <Typography component="div" variant="h5">
            XL
          </Typography>
          <Typography component="div" variant="h7">
            Arrives in 1min
          </Typography>
        </Box>
        <Typography
          sx={{ fontWeight: "bold", margin: "0px auto" }}
          component="div"
          variant="h5"
        >
          $25.50
        </Typography>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, padding: 10 }}>
      <Card sx={{ margin: "10px auto" }} variant="outlined">
        {cardOne}
      </Card>
      <Card sx={{ margin: "10px auto" }} variant="outlined">
        {cardTwo}
      </Card>
      <Card sx={{ margin: "10px auto" }} variant="outlined">
        {cardThree}
      </Card>
    </Box>
  );
}
