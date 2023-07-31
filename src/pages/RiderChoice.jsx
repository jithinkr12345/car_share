import React, { useState } from "react";
import SearchBar from "../components/SerachBar";
import Footer from "../components/Footer";
import Map from "../components/map";
import ChooseRide from "./ChooseRide";

function RideChoice() {
  const [showChooseRide, setShowChooseRide] = useState(true);
  const [regularCost, setRegularCost] = useState(0);
  const [comfortCost, setComfortCost] = useState(0);
  const [xlCost, setXlCost] = useState(0);
  if (showChooseRide) {
    var grid1 = "col-md-4";
    var grid2 = "col-md-8";
  }
  else {
    var grid1 = "col-md-0";
    var grid2 = "col-md-12";
  }
  const handleShowChooseRide = (obj) => {
    // setShowChooseRide(obj);
    console.log(obj, 'obj')
    setRegularCost(obj.calculateRegularCost);
    setComfortCost(obj.calculateComfortCost);
    setXlCost(obj.calculateXlCost);
  }
  return (
    <>
      <div className="container">
        <SearchBar handleFunction={handleShowChooseRide} />
        <div className="row">
          <div className={grid1}>
            {showChooseRide ? <ChooseRide costData={{ regularCost, comfortCost, xlCost }} /> : null}
          </div>
          <div className={grid2}>
            <Map />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RideChoice;