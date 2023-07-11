import React, { useState } from "react";
import SearchBar from "../components/SerachBar";
import Footer from "../components/Footer";
import Map from "../components/map";
import ChooseRide from "./ChooseRide";

function RideChoice() {
  const [showChooseRide, setShowChooseRide] = useState(true);
  if(showChooseRide){
    var grid1 = "col-md-4";
    var grid2 = "col-md-8";
  }
  else{
    var grid1 = "col-md-0";
    var grid2 = "col-md-12";
  }
  const handleShowChooseRide = (flag) => {
    setShowChooseRide(flag);
  }
  return (
    <>
      <div className="container">
        <SearchBar handleFunction={handleShowChooseRide} />
        <div className="row">
          <div className={grid1}>
            {showChooseRide ? <ChooseRide /> : null}
          </div>
          <div className={grid2}>
            <Map />
          </div>
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default RideChoice;