import React, { useEffect } from "react";
import { useState } from "react";
import GoogleMapReact from 'google-map-react';
import {GoogleMap, MarkerF, Polyline, DirectionsRenderer, LoadScript} from "@react-google-maps/api";
import Geocode from "react-geocode";
import axios from 'axios';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map(props){
    console.log("-----hello------", props);
    // const defaultProps = {
    //     center: {
    //         lat: 43.497990,
    //         lng: -80.529190
    //     },
    //     zoom: 11
    // }
    
    // const [lat, setLat] = useState('');
    // const [lng, setLng] = useState('');
    const [renderResponse, setRenderResponse] = useState({})
    const [pickup, setPickup] = useState('');
    const [pickuplat, setPickuplat] = useState(43.497990);
    const [pickuplng, setPickuplng] = useState(-80.529190);
    const [dropofflat, setDropofflat] = useState(43.497990);
    const [dropofflng, setDropofflng] = useState(-80.529190);
    const [dropoff, setDropoff] = useState('');
    const [rideid, setRideid] = useState(0);
    const [driverid, setDriverid] = useState(0);
    const [driverlat, setDriverlat] = useState(null);
    const [driverlng, setDriverlng] = useState(null);
    var center = {lat: pickuplat, lng: pickuplng};
    const _fetch_ride_details = async() => {
        try{
            if(rideid !== 0 && rideid !== undefined){
                const response =  await fetch("http://localhost:8000/api/rider/request?id=" + rideid, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                }).then(response => {
                return response.json();
                }).then(data => {
                if(data[0]){
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
            if(driverid !== 0 && driverid !== null){
                const response =  await fetch("http://localhost:8000/api/driver/location?id=" + driverid, {
                method: 'GET',
                headers: {'Content-Type': 'application/json'},
                }).then(response => {
                return response.json();
                }).then(data => {
                if (data && data[0]){
                    setDriverlat(parseFloat(data[0].latitude));
                    setDriverlng(parseFloat(data[0].longitude));
                }
                });
            }
          }
          catch (e){
            alert(e);
          }
      }

      const _mark_ride_location = async() => {
        try{
            if(props.direction.pickup){
                console.log("url", props);
                const pick_response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        props.direction.pickup.current.value
                    )}&key=AIzaSyDmwg66yLMaOZ_KmLSdf-cZdieKWKpMDts`
                  );
            
                  const { pick_results } = pick_response.data;
                  console.log("---------Google Map api", pick_results);
                  if(pick_results){
                    center = {
                        lat: pick_results[0].geometry.location.lat,
                        lng: pick_results[0].geometry.location.lng
                    }
                    console.log("Center", center);
                    setPickuplat(pick_results[0].geometry.location.lat);
                    setPickuplng(pick_results[0].geometry.location.lng);
                  }
            }
            if(props.direction.dropoff){
                console.log("url", props);
                const dropoff_response = await axios.get(
                    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
                        props.direction.dropoff.current.value
                    )}&key=AIzaSyDmwg66yLMaOZ_KmLSdf-cZdieKWKpMDts`
                  );
            
                  const { drop_results } = dropoff_response.data;
                  console.log("---------Google Map api1", drop_results);
                  if(drop_results){
                    center = {
                        lat: drop_results[0].geometry.location.lat,
                        lng: drop_results[0].geometry.location.lng
                    }
                    console.log("Center", center);
                    setDropofflat(drop_results[0].geometry.location.lat);
                    setDropofflng(drop_results[0].geometry.location.lng);
                  }
            }
          }
          catch (e){
            alert(e);
          }
      }

    useEffect(() => {
        setRenderResponse(props.direction.renderResponse);
        setPickup(props.direction.pickup);
        setDropoff(props.direction.dropoff);
        setRideid(props.direction.rideid);
        let mark_loc = _mark_ride_location();
        let drive_id = _fetch_ride_details();
        let driver_loc = _fetch_driver_location();
        
    });
    const college = {lat:43.479470832335984, lng:-80.5185297612};
    console.log("Center1", center);
    var polylinePath = []
    if(driverlat){
        polylinePath = [
            { lat: driverlat, lng: driverlat },
            { lat: pickuplat, lng: pickuplng },
        ];
    }
    else{
        polylinePath = [
            { lat: pickuplat, lng: pickuplng },
            { lat: dropofflat, lng: dropofflng },
        ]; 
    }

    console.log('PolylinePath', polylinePath);
    return (
        <div className="map" style={{height: '70vh', width: '100%'}}>
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%', height:'100%'}}>

                <MarkerF position={center}/>
                <Polyline path={polylinePath} options={{ strokeColor: '#669DF6', strokeOpacity: '1.0', geodesic: true, strokeWeight: 1}} />
                {renderResponse && <DirectionsRenderer directions={renderResponse}/>}
            </GoogleMap>
        </div>
    );
}