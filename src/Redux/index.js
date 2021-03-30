import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactsReducer } from "./reducers/contactsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    contacts: contactsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))