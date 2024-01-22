import { GET_USER_FETCH } from "../actions";
import { EDIT_USER_INFO } from "../actions";

const initialState = {
    userFetch: []
}

const userFetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_FETCH:
            return {
                ...state,
                userFetch: action.payload
            }
        case EDIT_USER_INFO: 
            return {
                ...state,
                userFetch: action.payload
            }
        default:
            return state
    }
}

export default userFetchReducer