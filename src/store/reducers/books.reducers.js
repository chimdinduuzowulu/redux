import { ADD,DELETE } from "../types";

const initialState = [];

const booksReducer = ( state = initialState, action ) => {
    const {type, payload} = action;
    switch (type) {
        case ADD:
            return [...state, payload];
        case DELETE:
            return state.filter((item) => item.name !== payload.name );
        default:
           return state;
    }
};
export default booksReducer;