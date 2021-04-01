import { addContactAction, deleteContactAction, getContactsAction, setContactsAction } from "./actions";

export const fetchContacts = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/contacts")
            .then((response) => response.json())
            .then((json) => dispatch(getContactsAction(json)))
            .catch((err) => console.log(err.message));
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

export const setContacts = (dragIndex, dropIndex, updatedContacts) => {
    let dragContact = { ...updatedContacts[dragIndex], id: updatedContacts[dropIndex].id }
    let dropContact = { ...updatedContacts[dropIndex], id: updatedContacts[dragIndex].id }

    let options1 = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dragContact)
    }

    let options2 = {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dropContact)
    }

    return (dispatch) => {
        fetch(`http://localhost:8080/contacts/${dragContact.id}`, options1)
            .then(() => fetch(`http://localhost:8080/contacts/${dropContact.id}`, options2))
            .then(() => dispatch(setContactsAction(updatedContacts)))
            .catch((err) => console.log(err.message))
    }
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
    }
}