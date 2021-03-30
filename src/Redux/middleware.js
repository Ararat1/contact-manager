import { getContacts } from "./actions"

export const fetchContacts = () => {
    return (dispatch) => {
        fetch("http://localhost:8080/contacts")
            .then(response => response.json())
            .then(json => dispatch(getContacts(json)))
            .catch(err => console.log(err.message))
    }
}