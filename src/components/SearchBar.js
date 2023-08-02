import {React, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/rider.css";
import axios from 'axios';
import PlaceAutocomplete from '../PlaceAutoComplete';
// import { DirectionsService } from '@react-google-maps/api';
import { isPast, isFuture } from 'date-fns'; // Import date-fns functions for date validation
import {GoogleMap, MarkerF, Autocomplete} from "@react-google-maps/api";


const SearchBar = (props) => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    // const [totalDistance, setTotalDistance] = useState(null); // New state to hold the total distance
    const [totalAmount, setTotalAmount] = useState(null);
    const [regularCost, setRegularCost] = useState(0);
    const [comfortCost, setComfortCost] = useState(0);
    const [xlCost, setXlCost] = useState(0);
    // Map
    const [directionResponse, setDirectionResponse] = useState(null);
    const [distance, setDistance] = useState(0);
    const [duration, setDuration] = useState('');

    /** @type React.MutableRefObject<HTMLInputElement> */
    const orginRef = useRef();

    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();

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
      };

    const handleCarDetails = () => {
        props.handleFunction(true);
    }

    const [selectedOption, setSelectedOption] = useState('Select Vehicle');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Helper function to calculate the distance using Google Maps API
const calculateDistance = async(origin, destination) => {
  if (orginRef.current.value === '' || destinationRef.current.value === ''){
    return;
  }
    // Create a new DirectionsService instance
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: orginRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING

    });
    setDirectionResponse(results);
    setDistance((results.routes[0].legs[0].distance.value)/1000);
    setDuration(results.routes[0].legs[0].duration.text);
  
    // Define the request object for the DirectionsService
    const request = {
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING, // You can also choose other travel modes like BICYCLING or WALKING
    };
    try{
      const response =  await fetch("http://127.0.0.1:8000/api/user/price", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
            {
            "total_km": distance
          }
        )
      }).then(response => {
        return response.json();
      }).then(data => {
        setTotalAmount(data.total_price);
      });
    }
    catch (e){
      alert(e);
    }

    try{
      var calculateRegularCost = 0;
      var calculateComfortCost = 0;
      var calculateXlCost = 0;
      const distanceInKm = distance/1000;
      const categ_response =  await fetch("http://127.0.0.1:8000/api/rider/base_price", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
      }).then(response => {
        return response.json();
      }).then(data => {
        data.map((key, value) => {
          if(key.category === 'Regular'){
            calculateRegularCost = (key.base_price/100);
            setRegularCost(calculateRegularCost + totalAmount);
          }
          if(key.category === 'Comfort'){
            calculateComfortCost = key.base_price/100;
            setComfortCost(calculateComfortCost + totalAmount);
          }
          if(key.category === 'XL'){
            calculateXlCost = key.base_price/100;
            setXlCost(calculateXlCost + totalAmount);            
          }
        })
      });
    }
    catch (e){
      alert(e);
    }
      console.log("Amount", regularCost, comfortCost, xlCost);
      props.handleFunction({regularCost, comfortCost, xlCost, distance, duration, directionResponse, orginRef, destinationRef});
  };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='row form-search'>
                <div className="col-md-3 pickup">
                    <Autocomplete>
                      <input type='text' placeholder='Pickup Location' ref={orginRef}/>
                    </Autocomplete>
                </div>
                <div className="col-md-3 drop">
                    <Autocomplete>
                      <input type='text' placeholder='Dropoff Location' ref={destinationRef}/>
                    </Autocomplete>
                </div>
                <div className='col-md-1 date'>
                    <DatePicker selected={selectedTime} onChange={(time) => setSelectedTime(time)} placeholder="Date"/>
                </div>


                <div className='col-md-1 time'>
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
                {distance !== 0 && <p>Total distance: {distance} km</p>}
                {totalAmount !== null && <p>Total amount: ${totalAmount}</p>}
                {duration !== null && <p>Average duration: ${duration}</p>}
                {selectedTime === null && <p className="error-message">Please select a valid date and time.</p>}
               {isPast(selectedTime) && <p className="error-message">Selected date and time cannot be in the past.</p>}
            </div>
        </form>
    );
};
export default SearchBar;