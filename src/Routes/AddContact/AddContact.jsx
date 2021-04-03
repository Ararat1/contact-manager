import { useDispatch, useSelector } from "react-redux";
import history, { useHistory } from "react-router-dom";

import { addNewContact } from "../../Redux/middleware";

import ContactForm from "../../Components/Shared/ContactForm/ContactForm";

const AddContact = () => {
    const contacts = useSelector(({ contacts }) => contacts.contacts);

    const history = useHistory();
    const dispatch = useDispatch();

    // Add a new Contact
    // ------------------------------------------------------------------------------------------
    const addContact = (newContact) => {
        dispatch(addNewContact(contacts, newContact));
        history.push("/");
    };

    const cancelAddContact = () => history.push("/");

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <ContactForm
                        formName="Add Contact"
                        onAdd={addContact}
                        onCancel={cancelAddContact}
                    />
                </div>
            </div>
        </main>
    );
};

export default AddContact;
