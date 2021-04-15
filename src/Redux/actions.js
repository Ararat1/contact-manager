import {
    GET_CONTACTS,
    DELETE_CONTACT,
    SET_CONTACTS,
    SET_SEARCHED_CONTACTS,
    SET_ALERTS,
    SELECT_CONTACT,
    UNSELECT_CONTACT,
    SELECT_ALL_CONTATCS,
} from "./types";

// Ccontacts
export const getContactsAction = (payload) => ({ type: GET_CONTACTS, payload });
export const deleteContactAction = (payload) => ({
    type: DELETE_CONTACT,
    payload,
});
export const setContactsAction = (payload) => ({ type: SET_CONTACTS, payload });
export const setSearchedContactsAction = (payload) => ({
    type: SET_SEARCHED_CONTACTS,
    payload,
});

// Alerts
export const setAlertsAction = (payload) => ({ type: SET_ALERTS, payload });

// Select and Delete selected contacts
export const selectContactAction = (payload) => ({
    type: SELECT_CONTACT,
    payload,
});
export const selectAllContactsAction = (payload) => ({ type: SELECT_ALL_CONTATCS, payload });
export const unselectContactAction = (payload) => ({
    type: UNSELECT_CONTACT,
    payload,
});
