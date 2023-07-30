import React, { Component } from "react";
import Home from "./HomeUI";
import img1 from "../assets/images/driverr.png";
import img2 from "../assets/images/Passenger1.jpg";
import Slider from "../components/Slider";
import TwoButton from "../components/Twobuttons";
import Block from '../components/Block.js';
import Flipcard from '../components/Flipcard';
import back1 from '../assets/images/withroute.jpg';
import back2 from '../assets/images/sunsetcarimage.jpg';
import back3 from '../assets/images/hulk.jpg';
import back4 from '../assets/images/havingfun.jpg';
import back5 from '../assets/images/mapwithroute.jpg';
import back6 from '../assets/images/drivewithstair2.jpg';
import back7 from '../assets/images/caroption.jpg';
import Footer from '../components/Footer.js';

class Homes extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div>
				<Slider />
				<div className='block-head'>
					<h2 style={{ alignContent: 'flex-start', padding: '15px', color: '#e69119', fontSize: '45px' }}>Services</h2>
				</div>
				<div className="container-fluid d-flex justify-content-center road-box">
					<div className="row">
						<div className="col-sm-3 col-md-6">
							<Home imgsrc={img1} title="For a Driver" text=" Driving with Uber offers a flexible earning opportunity. It's a great alternative to full-time driver jobs,
							part-time driver jobs, or other part-time gigs, temp jobs, or seasonal employment. Or maybe you'
							re already a rideshare driver and want to supplement your income by becoming a
							driver using the Uber platform."/>
						</div>
						<div className="col-sm-3 col-md-6">
							<Home imgsrc={img2} title="For a Passenger" text="You can book all types of rides that are available in your city for your employees. If a particular ride type is not permitted as per the employee's 
							travel policy then, the Travel Admin can also override the ride policy in special circumstances the Travel Admin can also override the ride policy in special circumstances."/>
						</div>
					</div>
				</div>
				{/* <TwoButton /> */}
				<Block />
				<div className='block-head'>
					<h2 style={{ alignContent: 'flex-start', padding: '15px', color: '#e69119', fontSize: '45px' }}>Features</h2>
				</div>
				<div style={{display:'flex', padding:'10px', marginLeft:'20px'}} >
					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back1} style={{ height: '200px', width: '200px', margin: '5px' }}></img><div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} backContent={<><img src={back1} style={{height:'200px', width:'200px', margin:'5px'}}></img>
					<div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize</h4></div></>}/>

					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back2} style={{ height: '200px', width: '200px', margin: '5px' }}></img>
					<div style={{position: 'absolute', top: '50%', left: '40%'}}><h4 style={{color: 'white'}}>Fun</h4></div></>} backContent={<><img src={back2} style={{height:'200px', width:'200px', margin:'5px'}}></img><div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} />
					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back3} style={{ height: '200px', width: '200px', margin: '5px' }}></img>
					<div style={{position: 'absolute', top: '50%', left: '40%'}}><h4 style={{color: 'white'}}>Relax</h4></div></>} backContent={<><img src={back3} style={{height:'200px', width:'200px', margin:'5px'}}></img><div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} />
					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back4} style={{ height: '200px', width: '200px', margin: '5px' }}></img>
					<div style={{position: 'absolute', top: '50%', left: '25%'}}><h4 style={{color: 'white'}}>Safe Journey</h4></div></>} backContent={<><img src={back4} style={{height:'200px', width:'200px', margin:'5px'}}></img><div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} />
					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back5} style={{ height: '200px', width: '200px', margin: '5px' }}></img>
					<div style={{position: 'absolute', top: '50%', left: '40%'}}><h4 style={{color: 'white'}}>Luxury</h4></div></>} backContent={<><img src={back5} style={{height:'200px', width:'200px', margin:'5px'}}></img><div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} />
					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back6} style={{ height: '200px', width: '200px', margin: '5px' }}></img>
					<div style={{position: 'absolute', top: '50%', left: '40%'}}><h4 style={{color: 'white'}}>Rider</h4></div></>} backContent={<><img src={back6} style={{height:'200px', width:'200px', margin:'5px'}}></img>
					<div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} />
					<Flipcard style={{position: 'absolute'}} frontContent={<><img src={back7} style={{ height: '200px', width: '200px', margin: '5px' }}></img>
					<div style={{position: 'absolute', top: '50%', left: '40%'}}><h4 style={{color: 'white'}}>Find Cars</h4></div></>} backContent={<><img src={back7} style={{height:'200px', width:'200px', margin:'5px'}}></img>
					<div style={{position: 'absolute', top: '50%', left: '20%'}}><h4 style={{color: 'white'}}>Customize Ride</h4></div></>} />
				</div>
				<Footer/>
			</div>

		);
	}
}

export default Homes;