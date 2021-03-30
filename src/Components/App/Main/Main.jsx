import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../../Redux/middleware";

import Contact from "./ Contact/Contact";

import s from "./Main.module.sass";

const Main = () => {
    const contacts = useSelector(
        ({ getContactsReducer }) => getContactsReducer.contacts
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    });

    return (
        <main className={s.Main}>
            <div className="container">
                <div className="row d-flex justify-content-evenly">
                    {contacts.length ? (
                        contacts.map((contact) => (
                            <Contact contact={contact} key={contact.id} />
                        ))
                    ) : (
                        <h2>No contacts</h2>
                    )}
                </div>
            </div>
        </main>
    );
};

export default Main;
