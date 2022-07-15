import {useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNametouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNametouched;

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        // if (event.target.value.trim() !== "") {
        //     //using event.target.value instead of enteredName state makes it so the validation occurs instantly instead of the change being scheduled and shown on the next keystroke.
        //     setEnteredNameIsValid(true);
        // }
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        setEnteredName("");
        setEnteredNameTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
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
