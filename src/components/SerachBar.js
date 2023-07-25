import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/rider.css";
import PlaceAutocomplete from '../PlaceAutoComplete';
// import { DirectionsService } from '@react-google-maps/api';


const SearchBar = (props) => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [totalDistance, setTotalDistance] = useState(null); // New state to hold the total distance

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
        calculateDistance(pickup, destination); // Call the distance calculation function
        // onSearch({ pickup, destination }); // Optionally, you can call your existing onSearch function here
      };
      

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
        // Extract the total distance in meters from the response
        const distanceInMeters = result.routes[0].legs[0].distance.value;
        const distanceInKm = distanceInMeters / 1000;
        console.log(distanceInKm, 'distanceInKm')
        setTotalDistance(distanceInKm);
      } else {
        console.error('Error calculating distance:', status);
        setTotalDistance(null);
      }
    });
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