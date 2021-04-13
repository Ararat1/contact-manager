import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Row } from "react-bootstrap";

import Contact from "../../Components/Contact/Contact";
import ContactSkeleton from "../../Components/ContactSkeleton/ContactSkeleton";
import ConfirmDelete from "../../Components/ConfirmDelete/ConfirmDelete";
import Toolbar from "../../Components/Toolbar/Toolbar";
import NoSearched from "../../Components/NoSearched/NoSearched";
import NoContacts from "../../Components/NoContacts/NoContacts";
import { deleteContactFromDB, fetchContacts } from "../../Redux/middleware";
import { addContactAction, setAlertsAction } from "../../Redux/actions";

import s from "./Home.module.sass";

const Contacts = () => {
    // States
    // -----------------------------------------------------------------------------
    const [loading, setLoading] = useState(false);
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const searchedContacts = useSelector(
        ({ contacts }) => contacts.searchedContacts
    );
    const alerts = useSelector(({ alerts }) => alerts.alerts);
    const [deletingContactId, setDeletingContactId] = useState(null);
    const [deletingContactFullname, setDeletingContactFullname] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    // If there are alerts => show them
    // Get contacts from datebase
    // -----------------------------------------------------------------------------
    useEffect(() => {
        if (history.location.state) {
            let updatedAlerts = [...alerts];
            let newAlert = "";

            if (history.location.state.edited)
                // if contact was edited
                newAlert = `Edited "${history.location.state.contactFullName}" contact`;

            if (history.location.state.edited === false)
                // if contact wasn't changed
                newAlert = `Contact "${history.location.state.contactFullName}" is not edited`;

            if (history.location.state.added)
                // if new contact is added
                newAlert = `Added "${history.location.state.contactFullName}" contact`;

            updatedAlerts.unshift(newAlert);
            history.replace("/", undefined);

            // show alerts
            dispatch(setAlertsAction(updatedAlerts));
        }

        // get contacts from database
        if (!contacts.length) setLoading(true);
        dispatch(fetchContacts(setLoading));
    }, [history, alerts, dispatch, contacts.length]);

    // Contact deleting
    // -----------------------------------------------------------------------------
    const openDeleteModal = (id, fullName) => {
        // open delete modal for asking about delering
        // set deleting contact fullname for alerts show
        setDeletingContactId(id);
        setDeletingContactFullname(fullName);
    };

    const closeDeleteModal = () => {
        setDeletingContactId(null);
        setDeletingContactFullname("");
    };

    const deleteContact = (id) => {
        // set alert about contact deleting
        // close confirm modal
        // delete contact from database
        let updatedAlerts = [...alerts];
        let newAlert = `Deleted "${deletingContactFullname}" contact`;

        updatedAlerts.unshift(newAlert);
        dispatch(setAlertsAction(updatedAlerts));

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
    };

    // Render Home
    // ------------------------------------------------------------------------------------------
    return (
        <main className={s.Home}>
            <Toolbar />

            <section>
                {(loading && <ContactSkeleton />) || (
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
                                loading || <NoContacts />
                            )}
                        </Row>
                    </Container>
                )}
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
