import { GET_CONTACTS, DELETE_CONTACT, SET_CONTACTS } from "./types";

export const getContactsAction = (payload) => ({ type: GET_CONTACTS, payload })
export const deleteContactAction = (payload) => ({ type: DELETE_CONTACT, payload })
export const setContactsAction = (payload) => ({ type: SET_CONTACTS, payload })