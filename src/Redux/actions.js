import {
    GET_CONTACTS,
    DELETE_CONTACT,
    SET_CONTACTS,
    ADD_CONTACT,
    SET_SEARCHED_CONTACTS,
    SET_ALERTS,
    SELECT_CONTACT,
    UNSELECT_CONTACT,
} from "./types";

export const getContactsAction = (payload) => ({ type: GET_CONTACTS, payload });
export const deleteContactAction = (payload) => ({
    type: DELETE_CONTACT,
    payload,
});
export const setContactsAction = (payload) => ({ type: SET_CONTACTS, payload });
export const addContactAction = (payload) => ({ type: ADD_CONTACT, payload });
export const setSearchedContactsAction = (payload) => ({
    type: SET_SEARCHED_CONTACTS,
    payload,
});

export const setAlertsAction = (payload) => ({ type: SET_ALERTS, payload });

export const selectContactAction = (payload) => ({
    type: SELECT_CONTACT,
    payload,
});
export const unselectContactAction = (payload) => ({
    type: UNSELECT_CONTACT,
    payload,
});
