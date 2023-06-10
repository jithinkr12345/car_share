import React from 'react';
import "../assets/css/home.css";

const Home = props => {
	return(
		<div className="card text-center shadow">
			<div className="overflow">
				<img src={props.imgsrc} alt='Image1' className="card-img-top"/>
			</div>
			<div className="card-body text-dark">
				<h4 className="card-title">{props.title}</h4>
				<p className="card-text text-secondaryyy">{props.text}</p>
			</div>
		</div>
		);
}

export default Home;