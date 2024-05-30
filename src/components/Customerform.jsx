import {useStore} from "../data/store.js"
import { useState } from "react";
import'../css/Customerform.css'
import Orderpage from "./orderpage";


const Confirmform = () => {
	const { cartItems, clearItems } = useStore((state) => ({
		cartItems: state.cartItems,
		clearItems: state.clearItems
	}));
	
	//Validering sker
	const [name, setName] = useState('');
	const [nameTouched, setNameTouched] = useState(false);
	
	const [email, setEmail] = useState('');
	const [emailTouched, setEmailTouched] = useState(false);
	
	const [telefon, setTelefon] = useState('');
	const [telefonTouched, setTelefonTouched] = useState(false);
	
	const nameIsValid = name.length > 0;
	const nameErrorMessage = nameIsValid ? '' : 'Vänligen fyll i ditt namn.';
	
	const emailIsValid = email.length > 0 && email.includes('@');
	const emailErrorMessage = emailIsValid ? '' : 'Vänligen fyll i din e-postadress.';
	
	const telefonIsValid = telefon.length === 10 && /^\d+$/.test(telefon);
	const telefonErrorMessage = telefonIsValid ? '' : 'Vänligen fyll i din telefonnummer.';
	
	//CSS variables
	let nameErrorClass = 'error ', nameClass = '';
	if (!nameTouched) {
		nameErrorClass += 'hidden';
	} else {
		nameErrorClass += nameIsValid ? 'hidden' : 'invalid';
		nameClass += nameIsValid ? 'valid' : 'invalid';
	}
	
	// Email CSS variables
	let emailErrorClass = 'error-mail ', emailClass = '';
	if (!emailTouched) {
		emailErrorClass += 'hidden';
	} else {
		emailErrorClass += emailIsValid ? 'hidden' : 'invalid';
		emailClass += emailIsValid ? 'valid' : 'invalid';
	}
	
	//Telefon CSS variables
	let telefonErrorClass = 'error-telefon ', telefonClass = '';
	if (!telefonTouched) {
		telefonErrorClass += 'hidden';
	} else {
		telefonErrorClass += telefonIsValid ? 'hidden' : 'invalid';
		telefonClass += telefonIsValid ? 'valid' : 'invalid';
	}
	
	
	
	
	const handleClick = () => {
		clearItems();
		
	};
	
	const checkValidation = nameIsValid && emailIsValid && telefonIsValid
	
	
	
	return (
		
		<div className="customer-form-container">
		
		
			<div className="customer-form">
				<div className="confirm-info">
				<input type="text" placeholder="Namn" required
					className={nameClass}
					value={name}
					onChange={event => setName(event.target.value)}
					onBlur={() => setNameTouched(true)}
				/>
		<p className={nameErrorClass}> {nameErrorMessage} &nbsp; </p>
		
			</div>
				<div className="confirm-info">
				<input type="email" placeholder="E-post"
					className={emailClass}
					value={email}
					onChange={event => setEmail(event.target.value)}
					onBlur={() => setEmailTouched(true)}
				/>
		<p className={emailErrorClass}> {emailErrorMessage} &nbsp; </p>
			</div>
				<div className="confirm-info">
				<input type="telefon" placeholder="Telefonnummer" required
					className={telefonClass}
					value={telefon}
					onChange={event => setTelefon(event.target.value)}
					onBlur={() => setTelefonTouched(true)}
				/>
		<p className={telefonErrorClass}> {telefonErrorMessage} &nbsp; </p>
			</div>
				<div className="confirm-textarea">
				<textarea placeholder="Ev; meddelande" rows="4"></textarea>
			</div>
		
		<div>
		
		<button className="order-button" disabled= {!checkValidation} onClick={handleClick}>Beställ</button>
		
		
		
		
		
		
		</div>
		
		</div>
		
		
		</div>
		
	);
}

export default Confirmform;