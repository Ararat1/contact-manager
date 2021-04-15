import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

import { Validator } from "../../Util/Validator";
import { FormatText } from "../../Util/FormatText";
import { setInitialContact } from "../../Util/setInitialContact";
import { config } from "../../Util/config";

import s from "./EditContact.module.sass";

const EditContact = () => {
    // States
    // ------------------------------------------------------------------------------------------
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { id: editingContactID } = useParams(); // Get editing contact id from dynamic route

    const [editingContact, setEditingContact] = useState(
        setInitialContact(history.location.state)
    );
    const [details, setDetails] = useState({
        github: "",
        linkedin: "",
        skype: "",
    });

    // Get editing contact
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        setLoading(true);
        if (!editingContactID) history.push("/not-found");

        fetch(`${config.database.link}/details/${editingContactID}`)
            .then((res) => res.json())
            .then((details) => {
                if (history.location.state === undefined) {
                    fetch(
                        `${config.database.link}/contacts/${editingContactID}`
                    )
                        .then((res) => res.json())
                        .then((contact) => setEditingContact(contact))
                        .catch((err) => console.log(err.message));
                }

                setDetails(details);
                setLoading(false);
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));

        if (history.location.state === undefined) {
            setLoading(true);
            fetch(`${config.database.link}/contacts/${editingContactID}`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((contact) => setEditingContact(contact))
                .catch((err) => console.log(err.message));
        }
    }, [history, editingContactID]);

    // Handle inputs
    // ------------------------------------------------------------------------------------------
    const placeholders = {
        firstName: "First name *",
        lastName: "Last name *",
        email: "@ Email *",
        primaryNumber: "Primary Number *",
        workNumber: "Work Number *",
        notes: "Notes *",
        github: "GitHub link",
        linkedin: "Linkedin link",
        skype: "SKype link",
    };

    const handleInputEvent = ({ target: { name, value } }) => {
        let updatedEditingContact = { ...editingContact };
        let updatedDetails = { ...details };

        let _setEditingContact = true; // if true => editing contact was edited, else details

        switch (name) {
            case "firstName":
            case "lastName":
            case "notes":
                updatedEditingContact[name] = FormatText.text(value);
                break;
            case "email":
                updatedEditingContact[name] = FormatText.email(value);
                break;
            case "primaryNumber":
            case "workNumber":
                updatedEditingContact[name] = FormatText.telNumber(value);
                break;
            case "github":
            case "linkedin":
            case "skype":
                _setEditingContact = false;
                updatedDetails[name] = value;
                break;
            default:
                break;
        }

        if (_setEditingContact) {
            setEditingContact(updatedEditingContact);
            return;
        }

        setDetails(updatedDetails);
        return;
    };

    // Errors handling
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
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Validation
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
            github: Validator.isLink(details.github),
            linkedin: Validator.isLink(details.linkedin),
            skype: Validator.isLink(details.skype),
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

        // Save to database
        let reqOptions = {
            headers: { "Content-Type": "application/json" },
            method: "PUT",
        };

        fetch(`${config.database.link}/contacts/${editingContactID}`, {
            ...reqOptions,
            body: JSON.stringify(editingContact),
        })
            .then(() => {
                fetch(`${config.database.link}/details/${editingContactID}`, {
                    ...reqOptions,
                    body: JSON.stringify(details),
                });
            })
            .then(() =>
                history.push("/", {
                    edited: true,
                    contactFullName: `${editingContact.firstName} ${editingContact.lastName}`,
                })
            )
            .catch((err) => console.log(err.message));
    };

    // Cancel event hadnling
    // -----------------------------------------------------------------------------
    const handleCancelEvent = () =>
        history.push("/", {
            edited: false,
            contactFullName: `${editingContact.firstName} ${editingContact.lastName}`,
        });

    // Render EditContact
    // ------------------------------------------------------------------------------------------
    return (
        <main className={s.EditContact}>
            {(loading && (
                <Container className={s.loader}>
                    <Row>
                        <Col>
                            <PulseLoader loading={loading} />
                        </Col>
                    </Row>
                </Container>
            )) || (
                <Container>
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col xs={12} sm={10} md={8} lg={6} className={s.title}>
                            <h2>Edit Contact</h2>
                        </Col>
                        <div className="w-100"></div>
                        <Col xs={12} sm={10} md={8} lg={6} className={s.form}>
                            <Form onSubmit={handleFormSubmit}>
                                <Form.Row>
                                    <Form.Group as={Col}>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            value={editingContact.firstName}
                                            onInput={handleInputEvent}
                                            placeholder={placeholders.firstName}
                                            autoComplete="off"
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={editingContact.lastName}
                                            onInput={handleInputEvent}
                                            placeholder={placeholders.lastName}
                                            autoComplete="off"
                                        />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="email"
                                        value={editingContact.email}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.email}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="primaryNumber"
                                        value={editingContact.primaryNumber}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.primaryNumber}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="workNumber"
                                        value={editingContact.workNumber}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.workNumber}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="notes"
                                        value={editingContact.notes}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.notes}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="github"
                                        value={details.github}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.github}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="linkedin"
                                        value={details.linkedin}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.linkedin}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="skype"
                                        value={details.skype}
                                        onInput={handleInputEvent}
                                        placeholder={placeholders.skype}
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Button
                                    variant="secondary"
                                    onClick={handleCancelEvent}
                                >
                                    Cancel
                                </Button>
                                <Button variant="primary" type="submit">
                                    Save <i className="fas fa-save"></i>
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            )}
        </main>
    );
};

export default EditContact;
