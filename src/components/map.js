import React, { useEffect } from "react";
import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import {GoogleMap, MarkerF, DirectionsRenderer} from "@react-google-maps/api";
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props){
    console.log("Mappppppppppppppppp");
    const defaultProps = {
        center: {
            lat: 43.497990,
            lng: -80.529190
        },
        zoom: 11
    }
    
    // const [lat, setLat] = useState('');
    // const [lng, setLng] = useState('');
    const center = {lat: 43.497990, lng: -80.529190};
    const [renderResponse, setRenderResponse] = useState({})
    const [pickup, setPickup] = useState('');
    const [dropoff, setDropoff] = useState('');
    const [rideid, setRideid] = useState(0);
    const [driverid, setDriverid] = useState(0);
    const [driverlat, setDriverlat] = useState(null);
    const [driverlng, setDriverlng] = useState(null);
    console.log(props, 'props');

    const _fetch_ride_details = async() => {
        try{
            console.log("Teist1", rideid);
            if(rideid !== 0 && rideid !== undefined){
                console.log("Teist", rideid);
                const response =  await fetch("http://localhost:8000/api/rider/request?id=" + rideid, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                }).then(response => {
                return response.json();
                }).then(data => {
                console.log(data, "Mapprrrrrrrrr");
                if(data[0]){
                    console.log(data, "ccccccccccccccccccccccccccccc");
                    setDriverid(data[0].driver_id);
                }
                });
            }
          }
          catch (e){
            alert(e);
          }
      }

    const _fetch_driver_location = async() => {
        try{
            console.log("Teist123123", driverid);
            if(driverid !== 0 && driverid !== null){
                const response =  await fetch("http://localhost:8000/api/driver/location?id=" + driverid, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                }).then(response => {
                return response.json();
                }).then(data => {
                console.log(data, "LAtttttttt");
                if (data && data[0]){
                    setDriverlat(data[0].latitude);
                    setDriverlng(data[0].longitude);
                }
                });
            }
          }
          catch (e){
            alert(e);
          }
      }

    useEffect(() => {
        console.log("Mappppppppppppppppp000000000000000000000");
        setRenderResponse(props.direction.renderResponse);
        setPickup(props.direction.orginRef);
        setDropoff(props.direction.destinationRef);
        setRideid(props.direction.rideid);
        let drive_id = _fetch_ride_details();
        let driver_loc = _fetch_driver_location();
        console.log(driverid, "driveid");
        // console.log(drive_id, "driveid");
    });
    console.log("Mappppppppppppppppp1", renderResponse);
    // Geocode.fromAddress(pickup).then(
    //     (response) => {
    //         const { lati, long } = response.results[0].geometry.location;
    //         console.log(lati, long);
    //         setLat(lati);
    //         setLng(long);
    //     },
    //     (error) => {
    //         console.error(error);
    //     }
    // );
    // const college = {lat:driverlat, lng:driverlng};
    const college = {lat:43.479470832335984, lng:-80.5185297612};
    return (
        <div className="map" style={{height: '70vh', width: '100%'}}>
            {/* <GoogleMapReact bootstrapURLKeys={{key: "", language: 'en'}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                <AnyReactComponent lat={43.438180} lng={-80.492750} text="Jithin"/>
            </GoogleMapReact> */}
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%', height:'100%'}}>

                <MarkerF position={college}/>
                {renderResponse && <DirectionsRenderer directions={renderResponse}/>}
            </GoogleMap>
        </div>
    );
}