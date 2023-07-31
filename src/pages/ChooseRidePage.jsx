import React from 'react';
// import Map from './Map';



const ChooseRidePage = () => {
    // Sample location details
    const locationDetails = {
      name: 'Destination A',
      address: '123 Main St, City, State',
    };
  
    return (
      <div>
        <div className="location-details">
          <h2>{locationDetails.name}</h2>
          <p>{locationDetails.address}</p>
        </div>
        <div className="map-container">
          {/* <Map /> */}
        </div>
      </div>
    );
  };

  // const rideOptions = [
  //   {
  //     id: 1,
  //     type: 'Sedan',
  //     price: '$30',
  //   },
  //   {
  //     id: 2,
  //     type: 'SUV',
  //     price: '$40',
  //   },
  //   {
  //     id: 3,
  //     type: 'Luxury',
  //     price: '$50',
  //   },
  // ];

  // return (
  //   <div>
  //     <h1>Choose a Ride</h1>
  //     <ul>
  //       {rideOptions.map((ride) => (
  //         <li key={ride.id}>
  //           <h2>{ride.type}</h2>
  //           <p>{ride.price}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );


export default ChooseRidePage;
