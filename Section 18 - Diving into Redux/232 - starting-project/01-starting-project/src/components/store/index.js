import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

//configureStore expects an object with a single reducer key, the value for that key can be single reducer or an object consisting of various reducers
const store = configureStore({
    reducer: {counter: counterReducer, auth: authReducer},
});
export default store;
