import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import { Validator } from "../../Util/Validator";

import Input from "../../Components/Shared/Input/Input";
import Button from "../../Components/Shared/Button/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
        const { id } = queryString.parse(history.location.search);

        if (!id) history.push("/not-found");

        // Get eciting contact obj from database
        fetch(`http://localhost:8080/contacts/${id}`, {
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
    const handleEditContact = () => {
        let isValid = true;

        const validationFlags = {
            firstName: Validator.isUsername(editingContact.firstName),
            lastName: Validator.isUsername(editingContact.lastName),
            email: Validator.isEmail(editingContact.email),
            primaryNumber: Validator.isPhoneNumber(
                editingContact.primaryNumber
            ),
            workNumber: Validator.isPhoneNumber(editingContact.workNumber),
            notes: Validator.isNotes(editingContact.notes),
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
    const handleCancelEvent = () => history.push("/");

    return (
        <main>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12} sm={10} md={9} lg={6} className={s.title}>
                        <h2>Edit Contact</h2>
                    </Col>
                    <div className="w-100"></div>
                    <Col xs={12} sm={10} md={8} lg={6} className="p-0">
                        <div className={s.form}>
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
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default EditContact;
