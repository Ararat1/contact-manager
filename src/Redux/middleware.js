import { config } from "../Util/config"
import { deleteContactAction, getContactsAction, unselectContactAction } from "./actions";

// get contacts from database
export const fetchContacts = (setLoading) => {
    return (dispatch) => {
        fetch(`${config.database.link}/contacts`)
            .then((res) => res.json())
            .then((json) => dispatch(getContactsAction(json)))
            .catch((err) => console.log(err.message))
            .finally(() => setLoading(false));
    };
};

// delete contact from database
export const deleteContactFromDB = (id) => {
    let requestOptions = { method: "DELETE" };

    return (dispatch) => {
        fetch(`${config.database.link}/contacts/${id}`, requestOptions)
            .then(() => fetch(`${config.database.link}/details/${id}`, requestOptions))
            .then(() => dispatch(deleteContactAction(id)))
            .catch((err) => console.log(err.message));
    };
};

// delete selected contacts from database
// update state where no deleted contacts
export const deleteSelected = (selectedContactsId) => {
    // 1. get selected contacts id
    // 2. delete them from contacts by id
    // 3. delete details of the deleting contact from details by id
    // 4. delete deleted contact from selectedContacts state
    // 5. get updated contacts from database
    // 6. set contacts state
    let requestOptions = { method: "DELETE" };

    const _deleteSelected = (ids, dispatch) => {
        return fetch(`${config.database.link}/contacts/${ids[0]}`, requestOptions)
            .then(() => fetch(`${config.database.link}/details/${ids[0]}`, requestOptions))
            .then(() => {
                dispatch(unselectContactAction(ids.shift()))

                if (ids.length) {
                    _deleteSelected(ids, dispatch);
                } else {
                    return;
                }
            })
            .catch((err) => console.log(err));
    };

    return (dispatch) => {
        _deleteSelected(Object.keys(selectedContactsId), dispatch)
            .then(() => fetch(`${config.database.link}/contacts`))
            .then((res) => res.json())
            .then((json) => dispatch(getContactsAction(json)))
            .catch((err) => console.log(err));
    };
};