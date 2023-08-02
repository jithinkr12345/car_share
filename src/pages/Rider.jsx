import {React, useState} from 'react';
import SearchBar from '../components/SearchBar';
import Footer from '../components/Footer';
import Map from '../components/map';
import Modal from "../components/Modal";
import "../assets/css/home.css";

function Rider() {
    const [openModal, setOpenModal] = useState(false);
        
    return (
        <>
            <div className='container'>

                <SearchBar />
                <Map />
                <button className="open-modal-button" onClick={() =>{setOpenModal(true);}}>Payment</button>
                {openModal && <Modal openModal={openModal} setOpenModal={setOpenModal}/>}
                <Footer />
            </div>
        </>

    );
}

export default Rider;