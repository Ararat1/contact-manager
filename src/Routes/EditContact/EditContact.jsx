import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import isEmpty from "validator/lib/isEmpty";
import isLength from "validator/lib/isLength";
import isAlphanumeric from "validator/lib/isAlphanumeric";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";

import Input from "../../Components/Shared/Input/Input";
import Button from "../../Components/Shared/Button/Button";

import s from "./EditContact.module.sass";

const EditContact = () => {
    // Editing Contact
    // ------------------------------------------------------------------------------------------
    const [editingContact, setEditingContact] = useState({});
    const history = useHistory();

    // Get editing contact
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        // Get editing contact id
        const editingContactId = history.location.pathname.split("/")[2];

        if (!editingContactId) history.push("/not-found");

        // Get eciting contact obj from database
        fetch(`http://localhost:8080/contacts/${editingContactId}`, {
            method: "GET",
        })
            .then((res) => res.json())
            .then((contact) => setEditingContact(contact))
            .catch((err) => console.log(err.message));
    }, [history]);

    // Handle inputs
    // ------------------------------------------------------------------------------------------
    const placeholders = {
        firstName: "First name *",
        lastName: "Last name *",
        email: "@ Email *",
        primaryNumber: "Primary Number *",
        workNumber: "Work Number *",
        notes: "Notes *",
    };

    const handleInputEvent = ({ target: { name, value } }) => {
        let updatedEditingContact = { ...editingContact };
        updatedEditingContact[name] = value;
        setEditingContact(updatedEditingContact);
    };

    // Show Errors
    // -------------------------------------------------------------------------------
    const showErrors = (flags, placeholders) => {
        for (let [flag, value] of Object.entries(flags)) {
            if (value === false) {
                let errorMsg = `Invalid ${placeholders[flag]}`;
                alert(errorMsg);
                break;
            }
        }
    };

    // Edit event hadnling
    // -----------------------------------------------------------------------------
    const handleEditContact = (e) => {
        e.preventDefault();

        let isValid = true;

        const validationFlags = {
            firstName:
                !isEmpty(editingContact.firstName) &&
                isAlphanumeric(editingContact.firstName, "en-US") &&
                isLength(editingContact.firstName, { min: 2, max: 16 }),
            lastName:
                !isEmpty(editingContact.lastName) &&
                isAlphanumeric(editingContact.lastName, "en-US") &&
                isLength(editingContact.lastName, { min: 2, max: 16 }),
            email:
                !isEmpty(editingContact.email) && isEmail(editingContact.email),
            primaryNumber:
                !isEmpty(editingContact.primaryNumber) &&
                isMobilePhone(editingContact.primaryNumber, "am-AM"),
            workNumber:
                !isEmpty(editingContact.workNumber) &&
                isMobilePhone(editingContact.workNumber, "am-AM"),
            notes:
                !isEmpty(editingContact.notes) &&
                isAlphanumeric(editingContact.notes, "en-US") &&
                isLength(editingContact.notes, { min: 2, max: 8 }),
        };

        for (let flag of Object.values(validationFlags)) {
            if (flag === false) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            showErrors(validationFlags, placeholders);
            return;
        }

        // If contact wasn't edited => don't send a PUT request
        let initialContact = JSON.stringify(history.location.state.contact);
        let currentContact = JSON.stringify(editingContact);

        if (initialContact === currentContact) {
            history.push("/");
        } else {
            let reqOptions = {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "PUT",
                body: JSON.stringify(editingContact),
            };

            // Save to database
            fetch(
                `http://localhost:8080/contacts/${editingContact.id}`,
                reqOptions
            )
                .then(() => history.push("/"))
                .catch((err) => console.log(err.message));
        }
    };

    // Cancel event hadnling
    // -----------------------------------------------------------------------------
    const handleCancelEvent = (e) => {
        e.preventDefault();
        history.push("/");
    };

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div
                        className={`${s.title} col-12 col-sm-10 col-md-8 col-lg-6`}
                    >
                        <h2>Edit Contact</h2>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 p-0">
                        <form className={s.form}>
                            <Input
                                name="firstName"
                                placeholder={placeholders.firstName}
                                onInput={handleInputEvent}
                                value={editingContact.firstName}
                            />
                            <Input
                                name="lastName"
                                placeholder={placeholders.lastName}
                                onInput={handleInputEvent}
                                value={editingContact.lastName}
                            />
                            <Input
                                name="email"
                                placeholder={placeholders.email}
                                onInput={handleInputEvent}
                                value={editingContact.email}
                            />
                            <Input
                                name="primaryNumber"
                                placeholder={placeholders.primaryNumber}
                                onInput={handleInputEvent}
                                value={editingContact.primaryNumber}
                            />
                            <Input
                                name="workNumber"
                                placeholder={placeholders.workNumber}
                                onInput={handleInputEvent}
                                value={editingContact.workNumber}
                            />
                            <Input
                                name="notes"
                                placeholder={placeholders.notes}
                                onInput={handleInputEvent}
                                value={editingContact.notes}
                            />
                            <p>
                                <Button bg="blue" onClick={handleCancelEvent}>
                                    Cancel
                                </Button>
                                <Button bg="red" onClick={handleEditContact}>
                                    Save <i className="fas fa-save"></i>
                                </Button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default EditContact;
