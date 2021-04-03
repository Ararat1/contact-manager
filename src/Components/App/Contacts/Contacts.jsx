import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addNewContact,
    deleteContactFromDB,
    fetchContacts,
    setContacts,
} from "../../../Redux/middleware";

import Contact from "./Contact/Contact";
import NewContact from "./NewContact/NewContact";
import ConfirmDelete from "./ConfirmDelete/ConfirmDelete";
import Toolbar from "./Toolbar/Toolbar";

import s from "./Contacts.module.sass";

const Contacts = () => {
    // States
    // -----------------------------------------------------------------------------
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const [deletingContactId, setDeletingContactId] = useState(null);
    const [addContactIsVisible, setAddContactIsVisible] = useState(false);

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

    // Drag and Drop
    // ------------------------------------------------------------------------------------------
    const onDragAndDrop = (dragIndex, dropIndex) => {
        let updatedContacts = contacts.map((contact, index) => {
            if (index === dragIndex)
                return JSON.parse(JSON.stringify(contacts[dropIndex]));

            if (index === dropIndex)
                return JSON.parse(JSON.stringify(contacts[dragIndex]));

            return contact;
        });

        dispatch(setContacts(dragIndex, dropIndex, updatedContacts));
    };

    // Add a new Contact
    // ------------------------------------------------------------------------------------------
    const toggleAddContact = () => setAddContactIsVisible(!addContactIsVisible);

    const addContact = (newContact) => {
        toggleAddContact();
        dispatch(addNewContact(contacts, newContact));
    };

    return (
        <main className={s.Contacts}>
            <Toolbar addContact={toggleAddContact} />

            <section>
                <div className="container">
                    <div className="row d-flex justify-content-evenly">
                        {addContactIsVisible && (
                            <NewContact
                                onAdd={addContact}
                                onCancel={toggleAddContact}
                            />
                        )}

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
