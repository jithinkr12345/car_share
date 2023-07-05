import React from "react"
import {Link} from 'react-router-dom'
import image2 from '../assets/images/card2.jpg'


function Driverdetails(){
	return(

<div className="container row card-dash">
<div className="Card1 col-md-6">
      <div className="upper-container" >
        <div className="image-container">
              <img src={image2} alt="" height="100px" width="100px" />
        </div>
      </div>
    <div className="para-dash">
        <p>Required steps:</p>
      <p>Documents needs to be upload:</p>
      <p>1. Proof of work </p>
      <p>2. Profile Proof</p>
      <p>3. Driver's Licence</p>
      <p>4. Vehicle Insurance</p>
      <p>5. Vehicle Registration</p>
      <p>6. Vehicle Inspection</p>
      <p>7. Year of Expereince</p>
      
    </div>
    <div className="lower-container">
        <button><Link to={'/rider'}>Get a Ride?</Link></button>
    </div>
    </div>
    </div>
    
    );
    }
    

   export default Driverdetails;