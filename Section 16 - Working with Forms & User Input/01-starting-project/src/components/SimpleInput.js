import {useRef, useState} from "react";

const SimpleInput = (props) => {
    const nameInputRef = useRef();
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    const nameInputHandler = (event) => {
        setEnteredName(event.target.value);
        // if (enteredName.length > 0) {
        //     setEnteredNameIsValid(true);
        // }
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

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

    const nameInputClasses = !enteredNameIsValid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    onChange={nameInputHandler}
                    type="text"
                    id="name"
                    value={enteredName}
                />
                {!enteredNameIsValid && (
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
