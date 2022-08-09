import {createSlice, configureStore} from "@reduxjs/toolkit";

const initialCounterState = {counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        //four methods beacuse these where the four if cases in the reducer
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload; //! check to see if += works or needs to change to assigning with =
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const initialAuthState = {
    isAuthticated: false,
};

const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthticated = true;
        },
        logout(state) {
            state.isAuthticated = false;
        },
    },
});

//configureStore expects an object with a single reducer key, the value for that key can be single reducer or an object consisting of various reducers
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer},
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
