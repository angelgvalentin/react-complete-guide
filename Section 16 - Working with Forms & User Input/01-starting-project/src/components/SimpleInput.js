import useInput from "../hooks/useInput";

const SimpleInput = (props) => {
    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        reset: resetNameInput,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangedHandler,
        inputBlurHandler: nameInputBlurHandler,
    } = useInput((value) => value.trim() !== "");

    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        reset: resetEmailInput,
        hasError: emailInputHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;

    if (enteredNameIsValid && enteredEmailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        resetNameInput();
        resetEmailInput();
    };

    const nameInputClasses = nameInputHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailInputHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    onChange={nameChangedHandler}
                    onBlur={nameInputBlurHandler}
                    type="text"
                    id="name"
                    value={enteredName}
                />
                {nameInputHasError && (
                    <p className="error-text">Name must not be empty.</p>
                )}
            </div>

            <div className={emailInputClasses}>
                <label htmlFor="email">Your E-Mail</label>
                <input
                    onChange={emailChangeHandler}
                    onBlur={emailInputBlurHandler}
                    type="email"
                    id="email"
                    value={enteredEmail}
                />
                {emailInputHasError && (
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
