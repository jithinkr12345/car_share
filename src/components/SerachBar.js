import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/rider.css";

const SearchBar = ({ onSearch }) => {
    const [pickup, setPickup] = useState('');
    const [destination, setDestination] = useState('');

    const handlePickupChange = (event) => {
        setPickup(event.target.value);
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const [startDate, setStartDate] = useState(new Date());

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSearch({ pickup, destination });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className='row form-search'>
                <div className='col-md-2'>
                    <input type="text" placeholder="Pickup location" value={pickup} onChange={handlePickupChange} />
                </div>
                <div className='col-md-2'>
                    <input type="text" placeholder="Drop off location" value={destination} onChange={handleDestinationChange} />
                </div>
                <div className='col-md-2'>
                    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </div>
                <div className='col-md-1'>
                    <select>
                        <option value="12_00_am">12:00 AM</option>
                        <option value="12_10_am">12:10 AM</option>
                        <option value="12_20_am">12:20 AM</option>
                        <option value="12_30_am">12:30 AM</option>
                        <option value="12_40_am">12:40 AM</option>
                        <option value="12_50_am">12:50 AM</option>
                        <option value="1_00_am">1:00 AM</option>
                        <option value="1_10_am">1:10 AM</option>
                        <option value="1_20_am">1:20 AM</option>
                        <option value="1_30_am">1:30 AM</option>
                        <option value="1_40_am">1:40 AM</option>
                        <option value="1_50_am">1:50 AM</option>
                        <option value="2_00_am">2:00 AM</option>
                        <option value="2_10_am">2:10 AM</option>
                        <option value="2_20_am">2:20 AM</option>
                        <option value="2_30_am">2:30 AM</option>
                        <option value="2_40_am">2:40 AM</option>
                        <option value="2_50_am">2:50 AM</option>
                        <option value="3_00_am">3:00 AM</option>
                        <option value="3_10_am">3:10 AM</option>
                        <option value="3_20_am">3:20 AM</option>
                        <option value="3_30_am">3:30 AM</option>
                        <option value="3_40_am">3:40 AM</option>
                        <option value="3_50_am">3:50 AM</option>
                        <option value="4_00_am">4:00 AM</option>
                        <option value="4_10_am">4:10 AM</option>
                        <option value="4_20_am">4:20 AM</option>
                        <option value="4_30_am">4:30 AM</option>
                        <option value="4_40_am">4:40 AM</option>
                        <option value="4_50_am">4:50 AM</option>
                        <option value="5_00_am">5:00 AM</option>
                        <option value="5_10_am">5:10 AM</option>
                        <option value="5_20_am">5:20 AM</option>
                        <option value="5_30_am">5:30 AM</option>
                        <option value="5_40_am">5:40 AM</option>
                        <option value="5_50_am">5:50 AM</option>
                        <option value="6_00_am">6:00 AM</option>
                        <option value="6_10_am">6:10 AM</option>
                        <option value="6_20_am">6:20 AM</option>
                        <option value="6_30_am">6:30 AM</option>
                        <option value="6_40_am">6:40 AM</option>
                        <option value="6_50_am">6:50 AM</option>
                        <option value="7_00_am">7:00 AM</option>
                        <option value="7_10_am">7:10 AM</option>
                        <option value="7_20_am">7:20 AM</option>
                        <option value="7_30_am">7:30 AM</option>
                        <option value="7_40_am">7:40 AM</option>
                        <option value="7_50_am">7:50 AM</option>
                        <option value="8_00_am">8:00 AM</option>
                        <option value="8_10_am">8:10 AM</option>
                        <option value="8_20_am">8:20 AM</option>
                        <option value="8_30_am">8:30 AM</option>
                        <option value="8_40_am">8:40 AM</option>
                        <option value="8_50_am">8:50 AM</option>
                        <option value="9_00_am">9:00 AM</option>
                        <option value="9_10_am">9:10 AM</option>
                        <option value="9_20_am">9:20 AM</option>
                        <option value="9_30_am">9:30 AM</option>
                        <option value="9_40_am">9:40 AM</option>
                        <option value="9_50_am">9:50 AM</option>
                        <option value="10_00_am">10:00 AM</option>
                        <option value="10_10_am">10:10 AM</option>
                        <option value="10_20_am">10:20 AM</option>
                        <option value="10_30_am">10:30 AM</option>
                        <option value="10_40_am">10:40 AM</option>
                        <option value="10_50_am">10:50 AM</option>
                        <option value="11_00_am">11:00 AM</option>
                        <option value="11_10_am">11:10 AM</option>
                        <option value="11_20_am">11:20 AM</option>
                        <option value="11_30_am">11:30 AM</option>
                        <option value="11_40_am">11:40 AM</option>
                        <option value="11_50_am">11:50 AM</option>
                        <option value="12_00_pm">12:00 PM</option>
                        <option value="12_10_pm">12:10 PM</option>
                        <option value="12_20_pm">12:20 PM</option>
                        <option value="12_30_pm">12:30 PM</option>
                        <option value="12_40_pm">12:40 PM</option>
                        <option value="12_50_pm">12:50 PM</option>
                        <option value="1_00_pm">1:00 PM</option>
                        <option value="1_10_pm">1:10 PM</option>
                        <option value="1_20_pm">1:20 PM</option>
                        <option value="1_30_pm">1:30 PM</option>
                        <option value="1_40_pm">1:40 PM</option>
                        <option value="1_50_pm">1:50 PM</option>
                        <option value="2_00_pm">2:00 PM</option>
                        <option value="2_10_pm">2:10 PM</option>
                        <option value="2_20_pm">2:20 PM</option>
                        <option value="2_30_pm">2:30 PM</option>
                        <option value="2_40_pm">2:40 PM</option>
                        <option value="2_50_pm">2:50 PM</option>
                        <option value="3_00_pm">3:00 PM</option>
                        <option value="3_10_pm">3:10 PM</option>
                        <option value="3_20_pm">3:20 PM</option>
                        <option value="3_30_pm">3:30 PM</option>
                        <option value="3_40_pm">3:40 PM</option>
                        <option value="3_50_pm">3:50 PM</option>
                        <option value="4_00_pm">4:00 PM</option>
                        <option value="4_10_pm">4:10 PM</option>
                        <option value="4_20_pm">4:20 PM</option>
                        <option value="4_30_pm">4:30 PM</option>
                        <option value="4_40_pm">4:40 PM</option>
                        <option value="4_50_pm">4:50 PM</option>
                        <option value="5_00_pm">5:00 PM</option>
                        <option value="5_10_pm">5:10 PM</option>
                        <option value="5_20_pm">5:20 PM</option>
                        <option value="5_30_pm">5:30 PM</option>
                        <option value="5_40_pm">5:40 PM</option>
                        <option value="5_50_pm">5:50 PM</option>
                        <option value="6_00_pm">6:00 PM</option>
                        <option value="6_10_pm">6:10 PM</option>
                        <option value="6_20_pm">6:20 PM</option>
                        <option value="6_30_pm">6:30 PM</option>
                        <option value="6_40_pm">6:40 PM</option>
                        <option value="6_50_pm">6:50 PM</option>
                        <option value="7_00_pm">7:00 PM</option>
                        <option value="7_10_pm">7:10 PM</option>
                        <option value="7_20_pm">7:20 PM</option>
                        <option value="7_30_pm">7:30 PM</option>
                        <option value="7_40_pm">7:40 PM</option>
                        <option value="7_50_pm">7:50 PM</option>
                        <option value="8_00_pm">8:00 PM</option>
                        <option value="8_10_pm">8:10 PM</option>
                        <option value="8_20_pm">8:20 PM</option>
                        <option value="8_30_pm">8:30 PM</option>
                        <option value="8_40_pm">8:40 PM</option>
                        <option value="8_50_pm">8:50 PM</option>
                        <option value="9_00_pm">9:00 PM</option>
                        <option value="9_10_pm">9:10 PM</option>
                        <option value="9_20_pm">9:20 PM</option>
                        <option value="9_30_pm">9:30 PM</option>
                        <option value="9_40_pm">9:40 PM</option>
                        <option value="9_50_pm">9:50 PM</option>
                        <option value="10_00_pm">10:00 PM</option>
                        <option value="10_10_pm">10:10 PM</option>
                        <option value="10_20_pm">10:20 PM</option>
                        <option value="10_30_pm">10:30 PM</option>
                        <option value="10_40_pm">10:40 PM</option>
                        <option value="10_50_pm">10:50 PM</option>
                        <option value="11_00_pm">11:00 PM</option>
                        <option value="11_10_pm">11:10 PM</option>
                        <option value="11_20_pm">11:20 PM</option>
                        <option value="11_30_pm">11:30 PM</option>
                        <option value="11_40_pm">11:40 PM</option>
                        <option value="11_50_pm">11:50 PM</option>
                    </select>
                </div>
                <div className='col-md-1'>
                    <select>
                        <option value="car">Car</option>
                        <option value="bike">Bike</option>
                    </select>
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