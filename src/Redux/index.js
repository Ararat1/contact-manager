import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { getContactsReducer } from "./reducers/contactsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    getContactsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))