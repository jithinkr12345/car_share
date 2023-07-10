import React from "react";
import { useState } from "react";
import img1 from "../Resources/undraw_credit_card_re_blml.svg";
import img2 from "../Resources/undraw_payments_re_77x0.svg";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import SearchBar from "../components/SerachBar";


export const Modal = ({openModal, setOpenModal}) => {
	const [selectedValue, setSelectedValue] = useState('');
	const [showFields, setShowFields] = useState(false);
	
	function handleSelectionChange(event){
		const value = event.target.value;
		setSelectedValue(value);
		setShowFields(value !== 'cash');
	}
	return (
	<div className="main-container">
		<div className="modal-container">
			<img className="modal-image" src={img1}/>
			<h3 className="">Payment Methods</h3>
			<form action="">
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
					<button className="modal-footer-button modal-button-send">Confirm Payment</button>
					<button className="modal-footer-button modal-button-cancel" onClick={()=> {setOpenModal(false)}}>Cancel</button>
			</form>
		</div>
	</div>
	);
};