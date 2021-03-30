import { GET_CONTACTS } from "../types";

const defaultState = {
    contacts: []
}

const getContactsReducer = (state = defaultState, { type, payload }) => {
    switch (type) {
        case GET_CONTACTS:
            let updatedState = JSON.parse(JSON.stringify(state))
            updatedState.contacts = payload
            return updatedState;
        default:
            return state;
    }
};

export { getContactsReducer };