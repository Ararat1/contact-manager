import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import PulseLoader from "react-spinners/PulseLoader";

import { Validator } from "../../Util/Validator";

import s from "./EditContact.module.sass";

const setInitialContact = (locationState) =>
    locationState === undefined
        ? {
              id: "",
              firstName: "",
              lastName: "",
              email: "",
              primaryNumber: "",
              workNumber: "",
              notes: "",
          }
        : locationState.contact;

const EditContact = () => {
    // States
    // ------------------------------------------------------------------------------------------
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const { id: editingContactID } = useParams(); // Get editing contact id from dynamic route

    const [editingContact, setEditingContact] = useState(
        setInitialContact(history.location.state)
    );

    // Get editing contact
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        if (!editingContactID) history.push("/not-found");

        if (history.location.state === undefined) {
            setLoading(true);
            // Get editing contact obj from database
            fetch(`http://localhost:8080/contacts/${editingContactID}`, {
                method: "GET",
            })
                .then((res) => res.json())
                .then((contact) => setEditingContact(contact))
                .catch((err) => console.log(err.message))
                .finally(() => setLoading(false));
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
    };

    const handleInputEvent = ({ target: { name, value } }) => {
        let updatedEditingContact = { ...editingContact };
        updatedEditingContact[name] = value;
        setEditingContact(updatedEditingContact);
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

        if (history.location.state && history.location.state.contact) {
            // If contact wasn't edited => don't send a PUT request
            let initialContact = JSON.stringify(history.location.state.contact);
            let currentContact = JSON.stringify(editingContact);

            if (initialContact === currentContact) {
                history.push("/", {
                    edited: false,
                    contactFullName: `${editingContact.firstName} ${editingContact.lastName}`,
                });
                return;
            }
        }

        let reqOptions = {
            headers: {
                "Content-Type": "application/json",
            },
            method: "PUT",
            body: JSON.stringify(editingContact),
        };

        // Save to database
        fetch(`http://localhost:8080/contacts/${editingContact.id}`, reqOptions)
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
        <main>
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
                                            placeholder="First name"
                                            autoComplete="off"
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col}>
                                        <Form.Control
                                            type="text"
                                            name="lastName"
                                            value={editingContact.lastName}
                                            onInput={handleInputEvent}
                                            placeholder="Last name"
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
                                        placeholder="@ Email"
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="primaryNumber"
                                        value={editingContact.primaryNumber}
                                        onInput={handleInputEvent}
                                        placeholder="Primary number"
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="workNumber"
                                        value={editingContact.workNumber}
                                        onInput={handleInputEvent}
                                        placeholder="Work number"
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control
                                        type="text"
                                        name="notes"
                                        value={editingContact.notes}
                                        onInput={handleInputEvent}
                                        placeholder="Notes"
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
