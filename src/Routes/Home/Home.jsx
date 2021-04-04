import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactFromDB, fetchContacts } from "../../Redux/middleware";

import Contact from "../../Components/Contact/Contact";
import ConfirmDelete from "../../Components/ConfirmDelete/ConfirmDelete";
import Toolbar from "../../Components/Toolbar/Toolbar";

import s from "./Home.module.sass";
import { addContactAction } from "../../Redux/actions";

const Contacts = () => {
    // States
    // -----------------------------------------------------------------------------
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const [deletingContactId, setDeletingContactId] = useState(null);

    const dispatch = useDispatch();

    // Getting Contacts from datebase
    // -----------------------------------------------------------------------------
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    // Contact Deleting
    // -----------------------------------------------------------------------------
    const openDeleteModal = (id) => setDeletingContactId(id);
    const closeDeleteModal = () => setDeletingContactId(null);

    const deleteContact = (id) => {
        closeDeleteModal();
        dispatch(deleteContactFromDB(id));
    };

    // Drag and Drop
    // ------------------------------------------------------------------------------------------
    const onDragAndDrop = (dragIndex, dropIndex) => {
        let updatedContacts = contacts.map((contact, index) => {
            if (index === dragIndex) return { ...contacts[dropIndex] };
            if (index === dropIndex) return { ...contacts[dragIndex] };
            return contact;
        });

        dispatch(addContactAction(updatedContacts));

        // TODO: SAVE CHANGED CONTACTS TO DB
    };

    return (
        <main className={s.Home}>
            <Toolbar />

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        {contacts.length ? (
                            contacts.map((contact, index) => (
                                <Contact
                                    contact={contact}
                                    index={index}
                                    key={contact.id}
                                    onDelete={openDeleteModal}
                                    onDnD={onDragAndDrop}
                                />
                            ))
                        ) : (
                            <h2>No contacts</h2>
                        )}
                    </div>
                </div>
            </section>

            {deletingContactId && (
                <ConfirmDelete
                    onConfirm={() => deleteContact(deletingContactId)}
                    onCancel={closeDeleteModal}
                />
            )}
        </main>
    );
};

export default Contacts;
