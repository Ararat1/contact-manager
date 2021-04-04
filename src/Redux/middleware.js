import { addContactAction, deleteContactAction, getContactsAction } from "./actions";

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
    // ? get updated contacts state from store
    // ? get initial contacts from data base
    // ? find the difference and change only two changed contacts

    // let dragContact = { ...updatedContacts[dragIndex], id: updatedContacts[dropIndex].id }
    // let dropContact = { ...updatedContacts[dropIndex], id: updatedContacts[dragIndex].id }

    // let reqOptions = {
    //     method: "PUT",
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
    // }

    // return (dispatch) => {
    //     fetch(`http://localhost:8080/contacts/${dragContact.id}`, { ...reqOptions, body: JSON.stringify(dragContact) })
    //         .then(() => fetch(`http://localhost:8080/contacts/${dropContact.id}`, { ...reqOptions, body: JSON.stringify(dropContact) }))
    //         .then(() => dispatch(setContactsAction(updatedContacts)))
    //         .catch((err) => console.log(err.message))
    // }
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