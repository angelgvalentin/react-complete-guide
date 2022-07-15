import {useState} from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);

    const enteredNameIsValid = enteredName.trim() !== "";
    const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

    const enteredEmailIsValid = enteredEmail.includes("@");
    const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const nameInputChangeHandler = (event) => {
        setEnteredName(event.target.value);

        // if (event.target.value.trim() !== "") {
        //     //using event.target.value instead of enteredName state makes it so the validation occurs instantly instead of the change being scheduled and shown on the next keystroke.
        //     setEnteredNameIsValid(true);
        // }
    };
    const emailInputChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const nameInputBlurHandler = (event) => {
        setEnteredNameTouched(true);
    };

    const emailInputBlurHandler = (event) => {
        setEnteredEmailTouched(true);
    };

    const formSubmissionHandler = (event) => {
        event.preventDefault();

        setEnteredNameTouched(true);

        if (!enteredNameIsValid) {
            return;
        }

        if (!enteredEmailIsValid) {
            return;
        }

        setEnteredName("");
        setEnteredNameTouched(false);

        setEnteredEmail("");
        setEnteredEmailTouched(false);
    };

    const nameInputClasses = nameInputIsInvalid
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputIsInvalid
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

            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                    type="email"
                    id="email"
                    value={enteredEmail}
                />
                {emailInputIsInvalid && (
                    <p className="error-text">Please enter a valid E-Mail.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
