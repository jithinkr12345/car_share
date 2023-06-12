import React from 'react';
import SearchBar from '../components/SerachBar';
import Map from '../components/map';

function Rider() {
    return (
        <>
            <div className='container'>
                <SearchBar />
                <Map/>
            </div>
        </>

    );
}

export default Rider;