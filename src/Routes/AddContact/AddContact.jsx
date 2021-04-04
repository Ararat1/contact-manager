import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { addNewContact } from "../../Redux/middleware";
import { Validator } from "../../Util/Validator";

import Input from "../../Components/Shared/Input/Input";
import Button from "../../Components/Shared/Button/Button";

import s from "./AddContact.module.sass";

const AddContact = () => {
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const dispatch = useDispatch();
    const history = useHistory();

    const [newContact, setNewContact] = useState({
        firstName: "",
        lastName: "",
        email: "",
        primaryNumber: "",
        workNumber: "",
        notes: "",
    });

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
        let updatedNewContact = { ...newContact };
        updatedNewContact[name] = value;
        setNewContact(updatedNewContact);
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

    // Add Contact handling
    // -----------------------------------------------------------------------------
    const handleAddContact = () => {
        let isValid = true;

        const validationFlags = {
            firstName: Validator.isUsername(newContact.firstName),
            lastName: Validator.isUsername(newContact.lastName),
            email: Validator.isEmail(newContact.email),
            primaryNumber: Validator.isPhoneNumber(newContact.primaryNumber),
            workNumber: Validator.isPhoneNumber(newContact.workNumber),
            notes: Validator.isNotes(newContact.notes),
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

        dispatch(addNewContact(contacts, newContact));
        history.push("/");
    };

    // Cancel event hadnling
    // -----------------------------------------------------------------------------
    const handleCancelEvent = () => history.push("/");

    return (
        <main>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div
                        className={`${s.title} col-12 col-sm-10 col-md-8 col-lg-6`}
                    >
                        <h2>Add Contact</h2>
                    </div>
                    <div className="w-100"></div>
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 p-0">
                        <div className={s.form}>
                            <Input
                                name="firstName"
                                placeholder={placeholders.firstName}
                                onInput={handleInputEvent}
                                value={newContact.firstName}
                            />
                            <Input
                                name="lastName"
                                placeholder={placeholders.lastName}
                                onInput={handleInputEvent}
                                value={newContact.lastName}
                            />
                            <Input
                                name="email"
                                placeholder={placeholders.email}
                                onInput={handleInputEvent}
                                value={newContact.email}
                            />
                            <Input
                                name="primaryNumber"
                                placeholder={placeholders.primaryNumber}
                                onInput={handleInputEvent}
                                value={newContact.primaryNumber}
                            />
                            <Input
                                name="workNumber"
                                placeholder={placeholders.workNumber}
                                onInput={handleInputEvent}
                                value={newContact.workNumber}
                            />
                            <Input
                                name="notes"
                                placeholder={placeholders.notes}
                                onInput={handleInputEvent}
                                value={newContact.notes}
                            />
                            <p>
                                <Button bg="blue" onClick={handleCancelEvent}>
                                    Cancel
                                </Button>
                                <Button bg="red" onClick={handleAddContact}>
                                    Save <i className="fas fa-save"></i>
                                </Button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AddContact;
