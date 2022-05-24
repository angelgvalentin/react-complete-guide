import React, {useEffect, useState} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    useEffect(() => {
        const identifier = setTimeout(() => {
            console.log("Checking form validity");
            setFormIsValid(enteredEmail.includes("@") && enteredPassword.trim().length > 6);
        }, 1000);

        return () => {
            console.log("cleanup"); //this is a clean up function
            clearTimeout(identifier); //using this we are clearing all the timer that are started in ech keystroke. The whole point of this is to not have the form be validated and the state changed in each keystroke. It'll wait a specified amount of milliseconds after the user stops inputing to tho the validation and state change.
        };
    }, [enteredEmail, enteredPassword]); // ? In the dependencies bracket we put in the things that we are using in the use effect. useEffect will run whenever this things go through a change.

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredEmail, enteredPassword);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" id="email" value={enteredEmail} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
                </div>
                <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ""}`}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={enteredPassword} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
                </div>
                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
