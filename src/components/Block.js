import React from 'react';
import funpic from '../assets/images/florid-guy-rides-a-scooter.png'
import { Container } from '@mui/material';

export const Block = () => {
    return (
        <div className="block" style={{ background: "white", fontFamily: 'sans-serif', padding: '30px' }}>
            <div className='block-head'>
                <h2 style={{ alignContent: 'flex-start', padding: '15px', color: '#e69119 ', fontSize: '45px' }}>Making millions of rides more accessible</h2>
            </div>
            <div className='row'>
                <div className='block-img col-md-6'>
                    <img src={funpic} alter="driver pic" style={{ height: '350px', width: '650px', padding: '15px', }}></img>
                </div>

                <div className='block-para col-md-5'>
                    <p style={{ fontFamily: 'sans-serif', fontSize: '18px', fontWeight: 'inherit' }}>
                    A ride is more than just a ride. It's a gateway to opportunities and jobs.
                    A connection to community. And access to essentials like groceries, healthcare, and polling places.
                    Our initiative makes rides more accessible for millions, and helps bring communities even closer.
                    <br></br>
                    <br></br>
                    A ride is more than just a ride. It's a gateway to opportunities and jobs.
                    A connection to community. And access to essentials like groceries, healthcare, and polling places.
                    Our initiative makes rides more accessible for millions, and helps bring communities even closer.
                    
                    </p>
                </div>
            </div>
        </div>
    );
};

export const FrequentlyQuestion = () =>{

    return(
        <Container>

        <div>
            <h3>FAQ:</h3>
            <div>
                <h5>1. How do I book a ride?</h5>
            <h5>2. How is the fare calculated?</h5>
            <h5>3. Can I schedule a ride in advance?</h5>
            <h5>4. What safety measures are in place?</h5></div>
            

        </div>

        </Container>
    );
}