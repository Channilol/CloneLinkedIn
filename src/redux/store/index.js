import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userFetchReducer from "../reducers/user";

const mainReducer = combineReducers({
    user: userFetchReducer
})

const store = configureStore({
    reducer: mainReducer
})

export default store