import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import Map from "../components/map";
import ChooseRide from "./ChooseRide";

function RideChoice() {
  const [showChooseRide, setShowChooseRide] = useState(true);
  const [regularCost, setRegularCost] = useState(0);
  const [comfortCost, setComfortCost] = useState(0);
  const [xlCost, setXlCost] = useState(0);
  const [renderResponse, setRenderResponse] = useState({});
  const [duration, setDuration] = useState('');
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [rideid, setRideid] = useState('');
  if (pickup) {
    var grid1 = "col-md-4";
    var grid2 = "col-md-8";
  }
  else {
    var grid1 = "col-md-0";
    var grid2 = "col-md-12";
  }
  const handleShowChooseRide = (obj) => {
    console.log("RiderChoice", obj);
    setRegularCost(obj.calculateRegularCost);
    setComfortCost(obj.calculateComfortCost);
    setXlCost(obj.calculateXlCost);
    setDuration(obj.dur);
    setPickup(obj.orginRef);
    setDropoff(obj.destinationRef);
    setRenderResponse(obj.directionResponse);
  }

  const handleShowRide = (obj) => {
    setRideid(obj.ride_id);
  }

  return (
    <>
      <div className="container">
        <SearchBar handleFunction={handleShowChooseRide} />
        <div className="row">
          <div className={grid1}>
            {pickup ? <ChooseRide costData={{ regularCost, comfortCost, xlCost, pickup, dropoff, duration }}  handleFunction={handleShowRide} /> : null}
          </div>
          <div className={grid2}>
            <Map direction={{renderResponse, pickup, dropoff, rideid}}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RideChoice;