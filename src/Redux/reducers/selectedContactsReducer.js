import { SELECT_CONTACT, UNSELECT_CONTACT } from "../types";

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

        default:
            return state;
    };
};

export { selectedContactsReducer };