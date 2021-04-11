import { SELECT_ALL_CONTATCS, SELECT_CONTACT, UNSELECT_CONTACT } from "../types";

const defaultState = {
    selectedContacts: {}
};

const selectedContactsReducer = (state = defaultState, { type, payload }) => {
    let updatedState = JSON.parse(JSON.stringify(state));

    switch (type) {
        case SELECT_CONTACT:
            updatedState.selectedContacts[payload] = true;
            return updatedState;

        case UNSELECT_CONTACT:
            delete updatedState.selectedContacts[payload];
            return updatedState;

        case SELECT_ALL_CONTATCS:
            if (Object.keys(updatedState.selectedContacts).length === payload.length) updatedState.selectedContacts = {}
            else payload.forEach((id) => updatedState.selectedContacts[id] = true)

            return updatedState;

        // case "DELETE_SELECTED": // create a middleware
        // payload = {} => because all contatcs were teleted

        default:
            return state;
    };
};

export { selectedContactsReducer };