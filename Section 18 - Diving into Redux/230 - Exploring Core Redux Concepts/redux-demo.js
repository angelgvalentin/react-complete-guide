const redux = require("redux");

//reducer function always takes 2 parameters (old state and dispacthed action) and it mnust return the new state object
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type == "increment") {
        return {
            counter: state.counter + 1,
        };
    } else if (action.type == "decrement") {
        return {
            counter: state.counter - 1,
        };
    } else {
        return state;
    }
};

const store = redux.createStore(counterReducer);
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({type: "increment"});
store.dispatch({type: "increment"});
store.dispatch({type: "decrement"});
