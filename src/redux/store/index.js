import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userFetchReducer from "../reducers/user";
import userExperiencesReducer from "../reducers/experiences";
import postFetchReducer from "../reducers/post";

const mainReducer = combineReducers({
    user: userFetchReducer,
    experiences: userExperiencesReducer,
    post: postFetchReducer,
})

const store = configureStore({
    reducer: mainReducer
})

export default store