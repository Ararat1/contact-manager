import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteContactFromDB, fetchContacts } from "../../Redux/middleware";
import { addContactAction } from "../../Redux/actions";

import { Container, Row } from "react-bootstrap";

import Contact from "../../Components/Contact/Contact";
import ConfirmDelete from "../../Components/ConfirmDelete/ConfirmDelete";
import Toolbar from "../../Components/Toolbar/Toolbar";
import NoSearched from "../../Components/NoSearched/NoSearched";
import NoContacts from "../../Components/NoContacts/NoContacts";

import s from "./Home.module.sass";

const Contacts = () => {
    // States
    // -----------------------------------------------------------------------------
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const searchedContacts = useSelector(
        ({ contacts }) => contacts.searchedContacts
    );
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

        // TODO: Fix DnD work functional
        // TODO: SAVE CHANGED CONTACTS TO DB
    };

    return (
        <main className={s.Home}>
            <Toolbar />

            <section>
                <Container>
                    <Row className="d-flex justify-content-center">
                        {contacts.length && !searchedContacts ? (
                            contacts.map((contact, index) => (
                                <Contact
                                    contact={contact}
                                    index={index}
                                    key={contact.id}
                                    onDelete={openDeleteModal}
                                    onDnD={onDragAndDrop}
                                />
                            ))
                        ) : searchedContacts && !searchedContacts.length ? (
                            <NoSearched />
                        ) : searchedContacts ? (
                            searchedContacts.map((contact, index) => (
                                <Contact
                                    contact={contact}
                                    index={index}
                                    key={contact.id}
                                    onDelete={openDeleteModal}
                                    onDnD={onDragAndDrop}
                                />
                            ))
                        ) : (
                            <NoContacts />
                        )}
                    </Row>
                </Container>
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
