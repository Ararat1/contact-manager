import { GET_CONTACTS, DELETE_CONTACT, SET_CONTACTS, ADD_CONTACT } from "./types";

export const getContactsAction = (payload) => ({ type: GET_CONTACTS, payload });
export const deleteContactAction = (payload) => ({ type: DELETE_CONTACT, payload });
export const setContactsAction = (payload) => ({ type: SET_CONTACTS, payload });
export const addContactAction = (payload) => ({ type: ADD_CONTACT, payload });