import React, { useState } from 'react';
import "../assets/css/Flipcard.css";
// import driver from '../assets/images/driverr.png'
// import car from '../assets/images/Car_Option.jpg'
// import passenger from '../assets/images/Customer.avif'


// const Flipcard = (props) => {

// return (
//     <div>
    
//     <div class="title">

//   <h1>
//   <span style={{color: props.LightOrange}}>Bo</span>
//   <span style={{color: props.blue}}>ok</span> 
//   <span style={{color: props.red}}>Your</span>
//   <span style={{color: props.blue}}>Ri</span>
//   <span style={{color: props.violet}}>de</span>



//   </h1>
//   </div>

// <div class="flip1">

//   <img src= {driver} alt="Driver"></img>

//   <h3>Read About Our Driver</h3>

//   <p>We guarantee you the safe drive. See all the imformation about our drivers.</p>

// </div>

// <div class="flip2">

//   <img src={car} alt="car"></img>

//   <h3> Select your Car</h3>

//   <p>Ride in the car you like..We have one of finest car options which will make your journey easy & comfortable.</p>

// </div>

// <div class="flip3">

//   <img src={passenger} alt="passenger"></img>

//   <h3>Passenger</h3>

//   <p>Find the what options user have!!</p>

// </div>
// </div>

// );

// }
// export default Flipcard;



const Flipcard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (

    <div style={{backgroundColor: 'black', margin: '5px'}}> 
      {/* <div> <p> Our Happy Customer</p></div> */}
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip} style={{backgroundColor:'#d29a5b', opacity: '0.4'}}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {frontContent}
        </div>
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Flipcard;