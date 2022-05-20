import {useState} from "react";
import Expenses from "./components/Expenses/Expenses";

import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12)},
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
    },
];

const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses]; //for setting the new expenses array we are returning an array that starts with the new expense being adding and we spread the rest of the already existing expenses (prevExpenses) in the array after it. If we reverse the order in that returned array then the new expense would be at the end of the array instead of the beginning. //! We use that function form beucae in this case we are depending on a previous state
        });

        // expenses.push(newExpense);
        // setExpenses(newExpense);
        // console.log(newExpense);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
