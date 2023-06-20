import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/rider.css";
import PlaceAutocomplete from '../PlaceAutoComplete';


const SearchBar = ({ onSearch }) => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');

    const handlePickupChange = (event) => {
        setPickup(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    // const [startDate, setStartDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearch({ pickup, destination });
    };

    const [selectedOption, setSelectedOption] = useState('Select Vehicle');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='row form-search'>
                {/* <div className='col-md-2'>
                    <input type="text" className="form-control" placeholder="Pickup location" value={pickup} onChange={handlePickupChange} />
                </div> */}
                <div className="col-md-6">
          <PlaceAutocomplete onPlaceSelect={handlePickupChange} className="form-control" placeholder="Pickup location" value={pickup} />
        </div>
        <div className="col-md-6">
          <PlaceAutocomplete onPlaceSelect={handleDestinationChange} className="form-control" placeholder="Select Destination" value={destination} />
        </div>
                <div className='col-md-2'>
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
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="bi bi-clock"></i>
              </span>
            </div>
            </div>
        
            <div className="container">
      <div className="row">
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
      </div>
    </div>
                
                <div className='col-md-1 search-btn'>
                    <button type="submit">Search</button>
                </div>
            </div>
        </form>
    );
};

// Initial Search Bar Implementation
export default SearchBar;