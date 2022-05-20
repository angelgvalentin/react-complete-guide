import React from "react";
import {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // Two ways of dealing with state.
    // setting stafe for every thing we mead to kepp track of like we do in the next three lines

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    //or setting one pieace of state as an object like we do below. Here we have to be careful that we don't loose data from other handlers when one handler si activated. For that we use the spread operator

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    // const titleChangeHandler = (e) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: e.target.value,
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: e.target.value};
    //     });
    // };

    // const amountChangeHandler = (e) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount: e.target.value,
    //     // });

    //     setUserInput((prevState) => {
    //         return {...prevState, enteredAmount: e.target.value};
    //     });
    // };

    // const dateChangeHandler = (e) => {
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate: e.target.value,
    //     // });

    //     setUserInput((prevState) => {
    //         return {...prevState, enteredDate: e.target.value};
    //     });
    // };

    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log("title is " + enteredTitle);
    };

    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // console.log("title is " + enteredAmount);
    };

    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // console.log("title is " + enteredDate);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData); //this function is decalred in the parent component (NewExpense) of this component and passed down as a prop into this one. Through it we send the expenseData up to the parent component (NewExpense)
        setEnteredDate("");
        setEnteredAmount("");
        setEnteredTitle("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min="0.01" step="0.01" value={enteredAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" onChange={dateChangeHandler} min="2019-01-01" max="2022-12-31" value={enteredDate} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="cancel" onClick={props.onCancel}>
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
