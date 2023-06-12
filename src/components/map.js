import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function map(){
    const defaultProps = {
        center: {
            lat: 43.497990,
            lng: -80.529190
        },
        zoom: 11
    }

return (
    <div className="map" style={{height: '70vh', width: '100%'}}>
        <GoogleMapReact bootstrapURLKeys={{key: "", language: 'en'}} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
            <AnyReactComponent lat={43.438180} lng={-80.492750} text="Jithin"/>
        </GoogleMapReact>
    </div>
);
}