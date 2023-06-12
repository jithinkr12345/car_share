import React from 'react';
import {Link} from 'react-router-dom'
import image1 from '../assets/images/car.png';
import image2 from '../assets/images/carsh.jpg'

function Dashboard(){
	return(
		<div className="container row card-dash">
			<div className="Card1 col-md-6">
		  		<div className="upper-container" >
					<div className="image-container">
			  			<img src={image2} alt="" height="100px" width="100px" />
					</div>
		  		</div>
				<div className="para-dash">
					<p>Experience hassle-free transportation with our reliable and convenient ride services. Whether you need a ride to the airport, a quick trip across town, or a luxurious journey for a special occasion, we've got you covered.</p>
				</div>
				<div className="lower-container">
					<button><Link to={'/rider'}>Get a Ride?</Link></button>
				</div>
			</div>
			<div className="Card2 col-md-6">
		  		<div className="upper-container" >
					<div className="image-container">
					<img src={image1} alt="" height="100px" width="100px" />
					</div>
		  		</div>
				<div className="para-dash">
					<p>Join our carpooling community and enjoy the benefits of sharing rides with fellow travelers. Carpooling not only helps reduce traffic congestion but also saves you money, promotes social connections, and contributes to a greener environment.</p>
				</div>
				<div className="lower-container">
					<button>Share Seats?</button>
				</div>
			</div>
	  	</div>
	);
}

export default Dashboard;