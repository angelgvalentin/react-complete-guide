import {Component} from "react";
import {useSelector, useDispatch} from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    // when we use useSelector, react will automagicaly setup a subscription to the redux-store for this component. that means it will be updated an recieve the latest counter everytime the counter changes in the redux store. It will cause this componenet to be re evaluated to keep it updated.

    const incrementHandler = () => {
        //an action is an object with a type property
        dispatch({type: "increment"});
    };

    const increaseHandler = () => {
        dispatch({type: "increase", amount: 10});
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
                <button onClick={increaseHandler}>Increment By 10</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <div></div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

// class Counter extends Component {
//     incrementHandler = () => {
//         this.props.increment();
//     };

//     decrementHandler = () => {
//         this.props.decrement();
//     };

//     toggleCounterHandler = () => {};

//     render() {
//         return (
//             <main className={classes.counter}>
//                 <h1>Redux Counter</h1>
//                 <div className={classes.value}>-- {this.props.counter} --</div>
//                 <div>
//                     <button onClick={this.incrementHandler.bind(this)}>
//                         Increment{" "}
//                     </button>
//                     <button onClick={this.decrementHandler.bind(this)}>
//                         Decrement
//                     </button>
//                 </div>
//                 <div></div>
//                 <button onClick={this.toggleCounterHandler}>
//                     Toggle Counter
//                 </button>
//             </main>
//         );
//     }
// }

// //connect wants two arguments. '
// //the first is a function that maps redux state to props that are then recieved in the component.

// const mapStateToProps = (state) => {
//     return {
//         counter: state.counter,
//     };
// };

// const mapDispatchToProps = (dispatch) => {
//     return {
//         increment: () => dispatch({type: "increment"}),
//         decrement: () => dispatch({type: "decrement"}),
//     };
// };
// the second paramter that connect recieves is called mapDispatchToProps

//connect will also setup a subscription like useSelector and useDispatch do
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
