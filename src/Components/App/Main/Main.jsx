import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactFromDB, fetchContacts } from "../../../Redux/middleware";

import Contact from "./ Contact/Contact";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import s from "./Main.module.sass";

const Main = () => {
    // States
    // -----------------------------------------------------------------------------
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const [deletingContactId, setDeletingContactId] = useState(null);
    const dispatch = useDispatch();

    // Getting Contacts from datebase
    // -----------------------------------------------------------------------------
    useEffect(() => {
        dispatch(fetchContacts());
    }, []);

    // Contact Deleting
    // -----------------------------------------------------------------------------
    const openDeleteModal = (id) => setDeletingContactId(id);
    const closeDeleteModal = () => setDeletingContactId(null);

    const deleteContact = (id) => {
        closeDeleteModal();
        dispatch(deleteContactFromDB(id));
    };

    return (
        <main className={s.Main}>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    {contacts.length ? (
                        contacts.map((contact) => (
                            <Contact
                                contact={contact}
                                key={contact.id}
                                onDelete={openDeleteModal}
                            />
                        ))
                    ) : (
                        <h2>No contacts</h2>
                    )}
                </div>
            </div>

            {deletingContactId !== null && (
                <ConfirmDelete
                    onConfirm={() => deleteContact(deletingContactId)}
                    onCancel={closeDeleteModal}
                />
            )}
        </main>
    );
};

export default Main;
