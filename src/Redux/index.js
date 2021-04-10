import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { contactsReducer } from "./reducers/contactsReducer";
import { alertsReducer } from "./reducers/alertsReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    alerts: alertsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))