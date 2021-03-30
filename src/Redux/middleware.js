import { deleteContact, getContacts } from "./actions"

export const fetchContacts = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/contacts")
            .then(response => response.json())
            .then(json => dispatch(getContacts(json)))
            .catch(err => console.log(err.message))
    }
}

export const deleteContactFromDB = (id) => {
    let options = { method: "DELETE" }

    return (dispatch) => {
        fetch(`http://localhost:8080/contacts/${id}`, options)
            .then(() => dispatch(deleteContact(id)))
            .catch(err => console.log(err.message))
    }
}