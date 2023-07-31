import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/rider.css";
import axios from 'axios';
import PlaceAutocomplete from '../PlaceAutoComplete';
// import { DirectionsService } from '@react-google-maps/api';
import { isPast, isFuture } from 'date-fns'; // Import date-fns functions for date validation


const SearchBar = (props) => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [totalDistance, setTotalDistance] = useState(null); // New state to hold the total distance
    const [totalAmount, setTotalAmount] = useState(null);
    const [regularCost, setRegularCost] = useState({ oneKm: 2 });
    const [comfortCost, setComfortCost] = useState({ oneKm: 3 });
    const [xlCost, setXlCost] = useState({ oneKm: 4 });

    const handlePickupChange = (event) => { console.log(event, 'eventttttt')
        setPickup(event.name);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.name);
    };

    // const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const handleFormSubmit = (event) => {
      event.preventDefault();
    
      // Check if a vehicle option is selected
      if (selectedOption === 'Select Vehicle') {
        alert('Please select a vehicle option.');
        return;
      }
    
      // Check if a valid date and time are selected
      if (selectedTime === null) {
        alert('Please select a valid date and time.');
        return;
      }
    
      // Check if the selected date and time are in the past
      if (isPast(selectedTime)) {
        alert('Selected date and time cannot be in the past.');
        return;
      }
        calculateDistance(pickup, destination); // Call the distance calculation function
        // onSearch({ pickup, destination }); // Optionally, you can call your existing onSearch function here
      };
      
        // Optionally, you can also check if the selected date and time are in the future
  // if (isFuture(selectedTime)) {
  //   alert('Selected date and time must be in the future.');
  //   return;
  // }

    const handleCarDetails = () => {
        props.handleFunction(true);
    }

    const [selectedOption, setSelectedOption] = useState('Select Vehicle');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Helper function to calculate the distance using Google Maps API
const calculateDistance = (origin, destination) => {
    // Create a new DirectionsService instance
    const directionsService = new window.google.maps.DirectionsService();
  
    // Define the request object for the DirectionsService
    const request = {
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING, // You can also choose other travel modes like BICYCLING or WALKING
    };
    console.log(request, 'request')



  
    // Call the DirectionsService route method
    directionsService.route(request, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {

        axios.get("http://127.0.0.1:8000/api/rider/base_price")
          .then(response => {
            console.log(response.data, 'priceAPI')
            let calculateRegularCost, calculateComfortCost, calculateXlCost = 0;
            
        response.data.map(costData => {
          console.log(response.data, 'COSTAPI')
          


        // Extract the total distance in meters from the response
        const distanceInMeters = result.routes[0].legs[0].distance.value;
        const distanceInKm = distanceInMeters / 1000;
        console.log(distanceInKm, 'distanceInKm')
        // calculating price
          if(costData.category === "regular") {
            calculateRegularCost = distanceInKm * Number(costData.base_price);
          } else if(costData.category === "comfort") {
            calculateComfortCost = distanceInKm * Number(costData.base_price);
          } else {
            calculateXlCost = distanceInKm * Number(costData.base_price);
          }
        
          setTotalDistance(distanceInKm);
          console.log(calculateRegularCost, calculateComfortCost, calculateXlCost, 'calculateRegularCost, calculateComfortCost, calculateXlCost')
          props.handleFunction({calculateRegularCost, calculateComfortCost, calculateXlCost});
        })
          })
      } else {
        console.error('Error calculating distance:', status);
        setTotalDistance(null);
      }
    });

    // try{
    //   const response =  fetch("http://127.0.0.1:8000/api/user/price", {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     // credentials: 'include',
    //     body: JSON.stringify(
    //         {
    //         "total_km": totalDistance
    //       }
    //     )
    //   }).then(response => {
    //     return response.json();
    //   }).then(data => {
    //     setTotalAmount(data.total_price);
    //   });
    //   // const body = response.text();
    //   // const result = JSON.parse(body);
    //   console.log(response);
    //   // console.log(result);
    // }
    // catch (e){
    //   alert(e);
    // }
  };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='row form-search'>
                {/* <div className='col-md-2'>
                    <input type="text" className="form-control" placeholder="Pickup location" value={pickup} onChange={handlePickupChange} />
                </div> */}
                <div className="col-md-2">
                    <PlaceAutocomplete onPlaceSelect={handlePickupChange} className="form-control" placeholder="Pickup location" value={pickup} />
                </div>
                <div className="col-md-2">
                    <PlaceAutocomplete onPlaceSelect={handleDestinationChange} className="form-control" placeholder="Select Destination" value={destination} />
                </div>
                <div className='col-md-2 date'>
                    <DatePicker selected={selectedTime} onChange={(time) => setSelectedTime(time)} />
                </div>


                <div className='col-md-2'>
                    <DatePicker
                selected={selectedTime}
                onChange={(time) => setSelectedTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="form-control"
                placeholderText="Select time"
                    />
                    {/* <div className="input-group-append">
                    <span className="input-group-text">
                        <i className="bi bi-clock"></i>
                    </span>
                    </div> */}

                {selectedTime === null && <p className="error-message">Please select a valid date and time.</p>}
               {isPast(selectedTime) && <p className="error-message">Selected date and time cannot be in the past.</p>}
                {/* Uncomment the following line if you want to show a future date validation error */}
              {/* {isFuture(selectedTime) && <p className="error-message">Selected date and time must be in the future.</p>} */}
                </div>
                <div className="col-md-2 category">
                    <ButtonGroup>
                        <DropdownButton
                        title={selectedOption}
                        variant="secondary"
                        id="search-dropdown"
                        onSelect={handleOptionSelect}
                        >
                        <Dropdown.Item eventKey="Select"> </Dropdown.Item>
                        <Dropdown.Item eventKey="Car"> Car </Dropdown.Item>
                        <Dropdown.Item eventKey="Bike"> Bike </Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </div>
                <div className='col-md-2 search-btn'>
                    <button variant="primary" type="submit">Search</button>
                </div>
                {totalDistance !== null && <p>Total distance: {totalDistance} km</p>}
                {totalAmount !== null && <p>Total amount: ${totalAmount}</p>}

        
            <div className="container">
      {/* <div className="row">
        <div className="col-md-8">
          <input type="text" className="form-control" placeholder="Search..." />
        </div>
        <div className="col-md-4">
          <ButtonGroup>
            <DropdownButton
              title={selectedOption}
              variant="secondary"
              id="search-dropdown"
              onSelect={handleOptionSelect}
            >
              <Dropdown.Item eventKey="Select"> </Dropdown.Item>
              <Dropdown.Item eventKey="Car"> Car </Dropdown.Item>
              <Dropdown.Item eventKey="Bike"> Bike </Dropdown.Item>
            </DropdownButton>
          </ButtonGroup>
        </div>
      </div> */}
    </div>
                
                {/* <div className='offset-md-10 col-md-2 search-btn'>
                    <button variant="primary" type="submit">Search</button>
                </div> */}
            </div>
        </form>
    );
};

// Initial Search Bar Implementation
export default SearchBar;