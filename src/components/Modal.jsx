import {React, useState, useEffect} from "react";
import img1 from "../Resources/undraw_credit_card_re_blml.svg";
import img2 from "../Resources/undraw_payments_re_77x0.svg";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SearchBar from "../components/SearchBar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/chooseride.css";
import { PacmanLoader } from "react-spinners";
import Cookies from 'universal-cookie';

function PaymentModal(props) {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [showFields, setShowFields] = useState(false);
  const [regularCost, setRegularCost] = useState(0);
  const [comfortCost, setComfortCost] = useState(0);
  const [xlCost, setXlCost] = useState(0);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [rideid, setRideid] = useState(0);
  const [apicall, setApicall] = useState(true);
  const [driverid, setDriverid] = useState(0);

  const fetchData = async () => {
    try {
		if (rideid !== 0 && rideid !== 'undefined' && apicall){
			const response = await fetch('http://localhost:8000/api/rider/request?id=' + rideid);
			const data = await response.json();
			if(data && data[0] && data[0].state === "running"){
				setLoading(false);
				setApicall(false);
				setDriverid(data[0].driver_id);
			}			
		}
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleClose = () => setShow(false);
  useEffect(() => {
    setRegularCost(props.amount.regularCost);
    setComfortCost(props.amount.comfortCost);
    setXlCost(props.amount.xlCost);
    setPickup(props.amount.pickup);
    setDropoff(props.amount.dropoff);
	const rideInterval = setInterval(fetchData, 10000);
	props.handleFunction({rideid});
  })
  const handleShow = async () => {
    const cookies = new Cookies();
	try{
		let amount = 0
		if(props.amount.regularCost){
			amount = regularCost
		}
		else if(props.amount.comfortCost){
			amount = comfortCost

		}
		else if(props.amount.xlCost){
			amount = xlCost

		}
		const categ_response =  await fetch("http://127.0.0.1:8000/api/rider/request", {
		  method: 'POST',
		  headers: {'Content-Type': 'application/json'},
		  body: JSON.stringify(
			{
				"amount": amount,
				"pickup": pickup.current.value,
				"dropoff": dropoff.current.value,
				"pay_type": "Cash",
				"state": "draft",
				"jwt": cookies.get('jwt')
			}
		  )
		}).then(response => {
		  return response.json();
		}).then(data => {
		  var ride_id = data.ride_id;
		  setRideid(ride_id);
		});
	  }
	  catch (e){
		alert(e);
	  }
		setShow(true);
  }
  const [loading, setLoading] = useState(true);

  const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "red",
  };

  function handleSelectionChange(event){
	const value = event.target.value;
	setSelectedValue(value);
	setShowFields(value !== 'cash');
	}

  return (
    <>
      <button onClick={handleShow} className="pay-btn">Confirm Ride</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Your Ride has confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			{loading ?<div className=""><PacmanLoader loading={loading} size={30} color="#2E4053" cssOverride={override}
/>Searching for the Driver....	</div>:''}
			{!loading ?<div className=""><img className="modal-image" src={img1}/><h3 className="">Payment Methods</h3><p>Please select payment methos:</p><select value={selectedValue} onChange={handleSelectionChange}><option value="cash">Cash</option><option value="card">Card</option></select><div></div></div>:''}
        </Modal.Body>
        <Modal.Footer>
			{!loading ? <div><Button variant="secondary" onClick={handleClose}> Close </Button> <Button variant="primary">Confirm</Button> </div>: ''}
		</Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModal;