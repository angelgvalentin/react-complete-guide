import {useRef, useState} from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => {
    return value.trim() === "";
};

const isFiveChars = (value) => {
    return value.trim().length === 5;
};

const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalCodeInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostalCode = postalCodeInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            postalCode: enteredPostalCodeIsValid,
            city: enteredCityIsValid,
        });

        const formIsValid =
            enteredNameIsValid &&
            enteredStreetIsValid &&
            enteredPostalCodeIsValid &&
            enteredCityIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
        });
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div
                className={`${classes.control} ${
                    formInputsValidity.name ? "" : classes.invalid
                }`}
            >
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    ref={nameInputRef}
                    // value={enteredName}
                />
                {!formInputsValidity.name && <p>Please enter a valid name.</p>}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.street ? "" : classes.invalid
                }`}
            >
                <label htmlFor="street">Street</label>
                <input
                    type="text"
                    id="street"
                    ref={streetInputRef}
                    // value={enteredStreet}
                />
                {!formInputsValidity.street && (
                    <p>Please enter a valid street name.</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.postalCode ? "" : classes.invalid
                }`}
            >
                <label htmlFor="postal">Postal Code</label>
                <input
                    type="text"
                    id="postal"
                    ref={postalCodeInputRef}
                    // value={enteredPostalCode}
                />
                {!formInputsValidity.postalCode && (
                    <p>Please enter a postal code that is 5 character long.</p>
                )}
            </div>
            <div
                className={`${classes.control} ${
                    formInputsValidity.city ? "" : classes.invalid
                }`}
            >
                <label htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    ref={cityInputRef}
                    // value={enteredCity}
                />
                {!formInputsValidity.city && <p>Please enter a valid city.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;
