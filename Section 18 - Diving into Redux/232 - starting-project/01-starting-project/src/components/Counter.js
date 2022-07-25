import {useSelector, connect, useDispatch} from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    // when we use useSelector, react will automagicaly setup a subscription to the redux-store for this component. that means it will be updated an recieve the latest counter everytime the counter changes in the redux store. It will cause this componenet to be re evaluated to keep it updated.

    const incrementHandler = () => {
        //an action is an object with a type property
        dispatch({type: "increment"});
    };

    const decrementHandler = () => {
        dispatch({type: "decrement"});
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- {counter} --</div>
            <div>
                <button onClick={incrementHandler}>Increment </button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <div></div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
