import { addContactAction, deleteContactAction, getContactsAction } from "./actions";

export const fetchContacts = (setLoading) => {
    return (dispatch) => {
        fetch("http://localhost:8080/contacts")
            .then((response) => response.json())
            .then((json) => dispatch(getContactsAction(json)))
            .catch((err) => console.log(err.message))
            .finally(() => setLoading(false));
    };
};

export const deleteContactFromDB = (id) => {
    let options = { method: "DELETE" };

    return (dispatch) => {
        fetch(`http://localhost:8080/contacts/${id}`, options)
            .then(() => dispatch(deleteContactAction(id)))
            .catch((err) => console.log(err.message));
    };
};

export const addNewContact = (contacts, newContact) => {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact)
    };

    return (dispatch) => {
        fetch("http://localhost:8080/contacts", options)
            .then((response) => response.json())
            .then((addedContact) => dispatch(addContactAction([...contacts, addedContact])))
            .catch((err) => console.log(err));
    };
};