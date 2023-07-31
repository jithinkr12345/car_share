import {React, useState } from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/rider.css";
import PlaceAutocomplete from '../PlaceAutoComplete';
import {GoogleMap, Autocomplete, DirectionsRenderer} from "@react-google-maps/api";
import { useRef } from 'react';
// import { DirectionsService } from '@react-google-maps/api';


const SearchBar = (props) => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');
    const [totalDistance, setTotalDistance] = useState(null); // New state to hold the total distance
    const [totalAmount, setTotalAmount] = useState(null);

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

    const [directionResponse, setDirectionResponse] = useState(null);
    const [distance, setDistance] = useState(null);
    const [duration, setDuration] = useState(null);

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // const handleCarDetails = () => {
  //   props.handleFunction(true);
  // }

  // Helper function to calculate the distance using Google Maps API
const calculateDistance = async(origin, destination) => {
    // Create a new DirectionsService instance
    if (originRef.current.value === '' || destinationRef.current.value === '')
    {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    console.log("--------------hllllllll1");
    console.log(originRef.current.value);
    const result = await directionsService.route({
      origin: originRef.current.value,
      destination: destinationRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING
    })
    console.log("--------------hllllllll");
    console.log(result);
    setDirectionResponse(result);
    setDistance(result.routes[0].legs[0].distance.text);
    setDuration(result.routes[0].legs[0].duration.text);
    console.log(distance);
    console.log(duration);
    props.handleFunction({distance, duration});
  
    // Define the request object for the DirectionsService
    // const request = {
    //   origin: origin,
    //   destination: destination,
    //   travelMode: window.google.maps.TravelMode.DRIVING,
    // };
    // console.log(request, 'request')
  
    // // Call the DirectionsService route method
    // directionsService.route(request, (result, status) => {
    //   if (status === window.google.maps.DirectionsStatus.OK) {
    //     const distanceInMeters = result.routes[0].legs[0].distance.value;
    //     const distanceInKm = distanceInMeters / 1000;
    //     console.log(distanceInKm, 'distanceInKm')
    //     setTotalDistance(distanceInKm);
    //   } else {
    //     console.error('Error calculating distance:', status);
    //     setTotalDistance(null);
    //   }
    // });

    
  };

  function clearRoute(){
    setDirectionResponse(null);
    setDistance('');
    setDuration('');
    originRef.current.value = '';
    destinationRef.current.value = '';
  }

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='row form-search'>
                {/* <div className='col-md-2'>
                    <input type="text" className="form-control" placeholder="Pickup location" value={pickup} onChange={handlePickupChange} />
                </div> */}
                <div className="col-md-2">
                  <Autocomplete>
                    <input type='text' placeholder='Pickup Location' ref={originRef}/>
                  </Autocomplete>
                    {/* <PlaceAutocomplete onPlaceSelect={handlePickupChange} className="form-control" placeholder="Pickup location" value={pickup} /> */}
                </div>
                <div className="col-md-2">
                    {/* <PlaceAutocomplete onPlaceSelect={handleDestinationChange} className="form-control" placeholder="Select Destination" value={destination} /> */}
                    <Autocomplete>
                      <input type='text' placeholder='Dropoff Location' ref={destinationRef}/>
                    </Autocomplete>
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