import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        //four methods beacuse these where the four if casre in the reducer
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.amount; //! check to see if += works or needs to change to assigning with =
        },
        togggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

//configureStore expects an object with a single reducer key, the value for that key can be single reducer or an object consisting of various reducers
const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;
