import React, {useContext, useEffect, useReducer, useState} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

const emailReducer = (state, action) => {
    if (action.type === "EMAIL_INPUT") {
        return {value: action.val, isValid: action.val.includes("@")};
    }

    if (action.type === "EMAIL_UNFOCUSED") {
        return {value: state.value, isValid: state.value.includes("@")};
    }
    return {value: "", isValid: false};
};

const passwordReducer = (state, action) => {
    if (action.type === "PASSWORD_INPUT") {
        return {value: action.val, isValid: action.val.trim().length > 6};
    }
    if (action.type === "PASSWORD_BLUR") {
        return {value: state.value, isValid: state.value.trim().length > 6};
    }

    return {
        value: "",
        isValid: false,
    };
};

const Login = () => {
    // const [enteredEmail, setEnteredEmail] = useState("");
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState("");
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const ctx = useContext(AuthContext);

    useEffect(() => {
        console.log("EFFECT RUNNING");
        return () => {
            console.log("effect CLEANUP)");
        };
    }, []); //this bit was to pay around with different ways of using useEffect and claenup function

    const {isValid: emailIsValid} = emailState; //here we are pulling the property "isValid" from the emailState object and assignint to an alias of "emailIsValid"
    const {isValid: passwordIsValid} = passwordState;

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity");

            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);

        return () => {
            console.log("cleanup"); //this is a clean up function
            clearTimeout(identifier); //using this we are clearing all the timer that are started in ech keystroke. The whole point of this is to not have the form be validated and the state changed in each keystroke. It'll wait a specified amount of milliseconds after the user stops inputing to tho the validation and state change.
        };
    }, [emailIsValid, passwordIsValid]); //  In the dependencies bracket we put in the things that we are using in the use effect. useEffect will run whenever these things go through a change.

    const emailChangeHandler = (event) => {
        dispatchEmail({type: "EMAIL_INPUT", val: event.target.value});

        // setFormIsValid(event.target.value.includes("@") > 6 && emailState.isValid);
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({type: "PASSWORD_INPUT", val: event.target.value});

        // setFormIsValid(event.target.value.trim().length > 6 && passwordState.isValid);
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: "EMAIL_UNFOCUSED"});
    };
    const validatePasswordHandler = () => {
        dispatchPassword({type: "PASSWORD_BLUR"});
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
