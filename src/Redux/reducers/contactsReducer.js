import { DELETE_CONTACT, GET_CONTACTS } from "../types";

const defaultState = {
    contacts: []
}

const contactsReducer = (state = defaultState, { type, payload }) => {
    let updatedState = JSON.parse(JSON.stringify(state));

    switch (type) {
        case GET_CONTACTS:
            updatedState.contacts = payload
            return updatedState;

        case DELETE_CONTACT:
            updatedState.contacts = updatedState.contacts.filter(({ id }) => id !== payload)
            return updatedState;

        default:
            return state;
    }
};

export { contactsReducer };