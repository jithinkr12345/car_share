import React, {Component } from "react";
import Home from "./HomeUI";
import img1 from "../assets/images/driverr.png";
import img2 from "../assets/images/Passenger1.jpg";

class Homes extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
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

        );
    }
}

export default Homes;