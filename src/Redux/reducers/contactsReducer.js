import { DELETE_CONTACT, GET_CONTACTS, SET_CONTACTS, SET_SEARCHED_CONTACTS } from "../types";

const defaultState = {
    contacts: [],
    searchedContacts: null
};

const contactsReducer = (state = defaultState, { type, payload }) => {
    let updatedState = JSON.parse(JSON.stringify(state));

    switch (type) {
        case GET_CONTACTS:
        case SET_CONTACTS:
            updatedState.contacts = payload;
            return updatedState;

        case DELETE_CONTACT:
            updatedState.contacts = updatedState.contacts.filter(({ id }) => id !== payload);
            return updatedState;

        case SET_SEARCHED_CONTACTS:
            updatedState.searchedContacts = payload;
            return updatedState;

        case "DELETE_SELECTED_CONTACTS":
            // 1. GET deletedContactsId from middleware as payload
            // 2. filter 'state.contacts' where no contacts with deleting contacts id-s
            // 3. updatedState.contacts = filteredContacts
            // setContacts
            break;

        default:
            return state;
    }
};

export { contactsReducer };