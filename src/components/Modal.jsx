import React from "react";
import { useState } from "react";
import img1 from "../Resources/undraw_credit_card_re_blml.svg";
import img2 from "../Resources/undraw_payments_re_77x0.svg";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SearchBar from "../components/SerachBar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../assets/css/chooseride.css";

function PaymentModal() {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState('');
  const [showFields, setShowFields] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSelectionChange(event){
	const value = event.target.value;
	setSelectedValue(value);
	setShowFields(value !== 'cash');
	}

  return (
    <>
      <button onClick={handleShow} className="pay-btn">Pay</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
			<img className="modal-image" src={img1}/>
			<h3 className="">Payment Methods</h3>
			<p>Please select payment methos:</p>
			<select value={selectedValue} onChange={handleSelectionChange}>
				<option value="cash">Cash</option>
				<option value="card">Card</option>
			</select>
			<div>
				{showFields && (
					<div>
						<div>
							<label className="modal--input-text">Card Number </label>
							<input placeholder="Card Number" className="modal-input"/>
						</div>
						<div>
							<label className="modal--input-text">Name on Card </label>
							<input placeholder="Card Name" className="modal-input"/>
						</div>
						<div>
							<label className="modal--input-text">Expiry Date </label>
							<input placeholder="Expiry Date" className="modal-input-smll"/>
						
							<label className="modal--input-text">CVV </label>
							<input placeholder="CVV" className="modal-input-smll"/>
						</div>
					</div>
				)}
			</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModal;