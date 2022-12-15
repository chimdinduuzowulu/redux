import { combineReducers } from "redux";
import  booksReducer  from "./books.reducers";
import  userReducer  from "./users.reducer";

const rootReducer = combineReducers({
    users: userReducer,
    books:booksReducer
});
export default rootReducer;