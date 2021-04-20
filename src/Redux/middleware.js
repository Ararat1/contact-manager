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
export const deleteContactFromDB = (_id) => {
    let requestOptions = { method: "DELETE" };

    return (dispatch) => {
        fetch(`${config.database.link}/contacts/${_id}`, requestOptions)
            .then(() => dispatch(deleteContactAction(_id)))
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



    return (dispatch) => {
        let allPromises = [];

        for (let id in selectedContactsId) {
            let promise = new Promise((res, rej) => {
                res(fetch(`${config.database.link}/contacts/${id}`, requestOptions)
                    .then(() => dispatch(unselectContactAction(id))));
            });

            allPromises.push(promise);
        }

        Promise.all(allPromises)
            .then(() => fetch(`${config.database.link}/contacts`))
            .then((res) => res.json())
            .then((json) => dispatch(getContactsAction(json)))
            .catch((err) => console.log(err));
    }
};