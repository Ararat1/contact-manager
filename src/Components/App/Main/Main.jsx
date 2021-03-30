import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteContactFromDB,
    fetchContacts,
    setContacts,
} from "../../../Redux/middleware";

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

        dispatch(
            setContacts({
                dragIndex,
                dropIndex,
                updatedContacts,
            })
        );

        // if (Array.isArray(searchedContacts) && searchedContacts.length > 0) {
        //     let updatedSearchedContacts = searchedContacts.map(
        //         (contact, index) => {
        //             if (index === dragIndex)
        //                 return { ...searchedContacts[dropIndex] };

        //             if (index === dropIndex)
        //                 return { ...searchedContacts[dragIndex] };

        //             return contact;
        //         }
        //     );

        //     setSearchedContacts(updatedSearchedContacts);
        // }
    };

    return (
        <main className={s.Main}>
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
