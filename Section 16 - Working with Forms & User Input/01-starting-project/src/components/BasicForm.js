import useInput from "../hooks/useInput";

const BasicForm = (props) => {
    const fieldIsEmptyCheck = (value) => {
        return value.trim() !== "";
    };

    const emailCheck = (value) => {
        return value.includes("@");
    };

    const {
        value: enteredName,
        isValid: nameIsValid,
        hasError: nameHasError,
        valueChangeHandler: firstNameInputChangeHandler,
        inputBlurHandler: firstNameInputBlurHandler,
        reset: nameReset,
    } = useInput(fieldIsEmptyCheck);

    const {
        value: enteredLastName,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameInputChangeHandler,
        inputBlurHandler: lastNameInputBlurHandler,
        reset: lastNameReset,
    } = useInput(fieldIsEmptyCheck);

    const {
        value: enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        reset: emailReset,
    } = useInput(emailCheck);

    let formIsValid = false;

    if (nameIsValid && lastNameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        nameReset();
        lastNameReset();
        emailReset();
    };

    const nameInputClasses = nameHasError
        ? "form-control invalid"
        : "form-control";

    const lastNameInputClasses = lastNameHasError
        ? "form-control invalid"
        : "form-control";

    const emailInputClasses = emailHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={formSubmissionHandler}>
            <div className="control-group">
                <div className={nameInputClasses}>
                    <label htmlFor="name">First Name</label>
                    <input
                        type="text"
                        id="name"
                        onBlur={firstNameInputBlurHandler}
                        onChange={firstNameInputChangeHandler}
                        value={enteredName}
                    />
                    {nameHasError && (
                        <p className="error-text">
                            Name field must not be empty.
                        </p>
                    )}
                </div>
                <div className={lastNameInputClasses}>
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        onBlur={lastNameInputBlurHandler}
                        onChange={lastNameInputChangeHandler}
                        value={enteredLastName}
                    />
                    {lastNameHasError && (
                        <p className="error-text">
                            Lastname field must not be empty.
                        </p>
                    )}
                </div>
            </div>
            <div className={emailInputClasses}>
                <label htmlFor="name">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    onBlur={emailInputBlurHandler}
                    onChange={emailInputChangeHandler}
                    value={enteredEmail}
                />
                {emailHasError && (
                    <p className="error-text">Invalid E-mail entered.</p>
                )}
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
