import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import axios from 'axios';
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CarImage from "../assets/images/car.png";
import "../assets/css/chooseride.css";
import PaymentModal from "../components/Modal";


const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const cardOne = (regularCost, duration) => (
  <>
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
        {/* <Typography component="div" variant="h7">
          Average Duration
        </Typography> */}
      </Box>
      <Typography
        sx={{ fontWeight: "bold", margin: "0px auto" }}
        component="div"
        variant="h5"
      >
        ${regularCost}
      </Typography>
    </Box>
  </>
);

const cardTwo = (comfortCost) => (
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
          {/* <Typography component="div" variant="h7">
            Arrives in 7min
          </Typography> */}
        </Box>
        <Typography
          sx={{ fontWeight: "bold", margin: "0px auto" }}
          component="div"
          variant="h5"
        >
          ${comfortCost}
        </Typography>
      </Box>
      <Box>
        <button className="pay-btn">Confirm Ride</button>
      </Box>
    </CardContent>
  </React.Fragment>
);

const cardThree = (xlCost) => (
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
          {/* <Typography component="div" variant="h7">
            Arrives in 1min
          </Typography> */}
        </Box>
        <Typography
          sx={{ fontWeight: "bold", margin: "0px auto" }}
          component="div"
          variant="h5"
        >
          ${xlCost}
        </Typography>
      </Box>
      <Box>
        <button className="pay-btn">Confirm Ride</button>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard(props) {
  const [openModal, setOpenModal] = useState(false);
  const [regularCost, setRegularCost] = useState(0);
  const [comfortCost, setComfortCost] = useState(0);
  const [xlCost, setXlCost] = useState(0);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [rideid, setRideid] = useState(0);
  const [duration, setDuration] = useState('');
  useEffect(() => {
    console.log("props", props);
    setRegularCost(props.costData.regularCost);
    setComfortCost(props.costData.comfortCost);
    setXlCost(props.costData.xlCost);
    setPickup(props.costData.pickup);
    setDropoff(props.costData.dropoff);
    setDuration(props.costData.duration);
  })

  const handleRide = (obj) => {
    setRideid(obj.rideid);
    var ride_id = obj.rideid;
    props.handleFunction({ride_id});
  }

  return (
    <Box sx={{ minWidth: 275, padding: 10 }}>
      <Card sx={{ margin: "10px auto" }} variant="outlined">
        <React.Fragment>
          <CardContent>
            {cardOne(regularCost.toFixed(2), duration)}
            <Box>

              <PaymentModal amount={{regularCost, comfortCost, xlCost, pickup, dropoff}} handleFunction={handleRide} />
            </Box>
          </CardContent>
        </React.Fragment>
      </Card>
      <Card sx={{ margin: "10px auto" }} variant="outlined">
        {cardTwo(comfortCost.toFixed(2))}
      </Card>
      <Card sx={{ margin: "10px auto" }} variant="outlined">
        {cardThree(xlCost.toFixed(2))}
      </Card>
    </Box>
  );
}
