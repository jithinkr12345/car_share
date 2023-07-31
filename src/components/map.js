import {React, useState} from "react";
import GoogleMapReact from 'google-map-react';
import {useJsApiLoader, GoogleMap, MarkerF, DirectionsRenderer} from "@react-google-maps/api";
import { Google } from "@mui/icons-material";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function map(props){
    console.log("gggggggggggggggggggggg");
    console.log(props);
    const defaultProps = {
        center: {
            lat: 43.497990,
            lng: -80.529190
        },
        zoom: 11
    }
    const center = {lat: 43.43833750748257, lng: -80.49276420341724};

    return (
        <div className="map" style={{height: '70vh', width: '100%'}}>
            {/* <GoogleMapReact bootstrapURLKeys={{key: "", language: 'en'}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                <AnyReactComponent lat={43.438180} lng={-80.492750} text="Jithin"/>
            </GoogleMapReact> */}
            <GoogleMap center={center} zoom={15} mapContainerStyle={{width: '100%', height: '100%'}}>
                <MarkerF position={center}/>
               {}
            </GoogleMap>
        </div>
    );
}