import React from 'react';
import SearchBar from '../components/SerachBar';
import Footer from '../components/Footer';
import Map from '../components/map';

function Rider() {
    return (
        <>
            <div className='container'>

                <SearchBar />
                <Map />
                <Footer />
            </div>
        </>

    );
}

export default Rider;