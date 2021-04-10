import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container, Row } from "react-bootstrap";

import Contact from "../../Components/Contact/Contact";
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
    const history = useHistory();
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const searchedContacts = useSelector(
        ({ contacts }) => contacts.searchedContacts
    );
    const [deletingContactId, setDeletingContactId] = useState(null);
    const [deletingContactFullname, setDeletingContactFullname] = useState("");
    const alerts = useSelector(({ alerts }) => alerts.alerts);

    const dispatch = useDispatch();

    // Getting Contacts from datebase
    // -----------------------------------------------------------------------------
    useEffect(() => {
        if (history.location.state) {
            let updatedAlerts = [...alerts];
            let newAlert = "";

            if (history.location.state.edited)
                newAlert = `Edited "${history.location.state.contactFullName}" contact`;

            if (history.location.state.edited === false)
                newAlert = `Contact "${history.location.state.contactFullName}" has not been edited`;

            if (history.location.state.added)
                newAlert = `Added "${history.location.state.contactFullName}" contact`;

            updatedAlerts.unshift(newAlert);
            history.replace("/", undefined);

            dispatch(setAlertsAction(updatedAlerts));
        }

        dispatch(fetchContacts());
    }, [history, alerts, dispatch]);

    // Contact Deleting
    // -----------------------------------------------------------------------------
    const openDeleteModal = (id, fullName) => {
        setDeletingContactId(id);
        setDeletingContactFullname(fullName);
    };
    const closeDeleteModal = () => {
        setDeletingContactId(null);
        setDeletingContactFullname("");
    };

    const deleteContact = (id, fullName) => {
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

        // TODO: Fix DnD functional
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
