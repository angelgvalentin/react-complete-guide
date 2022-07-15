import {useEffect, useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
    const [enteredNametouched, setEnteredNameTouched] = useState(false);

    useEffect(() => {
        if (enteredNameIsValid) {
            console.log("Entered name valid");
        }
    }, [enteredNameIsValid]);

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            setEnteredNameIsValid(false);
            return;
        }
    };

    const nameInputIsInvalid = !enteredNameIsValid && enteredNametouched;

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (enteredName.trim() === "") {
            console.log("Input field is empty");
            setEnteredNameIsValid(false);

            return;
        }

        setEnteredNameIsValid(true);

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log(enteredValue);

        setEnteredName("");
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    onChange={nameInputChangeHandler}
                    onBlur={nameInputBlurHandler}
                    type="text"
                    id="name"
                    value={enteredName}
                />
                {nameInputIsInvalid && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
