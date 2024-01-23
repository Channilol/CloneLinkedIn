import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userFetchReducer from "../reducers/user";
import userExperiencesReducer from "../reducers/experiences";

const mainReducer = combineReducers({
    user: userFetchReducer,
    experiences: userExperiencesReducer,
})

const store = configureStore({
    reducer: mainReducer
})

export default store