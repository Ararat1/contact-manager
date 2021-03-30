import { GET_CONTACTS, DELETE_CONTACT } from "./types";

export const getContacts = (payload) => ({ type: GET_CONTACTS, payload })
export const deleteContact = (payload) => ({ type: DELETE_CONTACT, payload })