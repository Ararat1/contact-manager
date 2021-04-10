import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { Validator } from "../../Util/Validator";
import { addNewContact } from "../../Redux/middleware";
import { setAlertsAction } from "../../Redux/actions";

import s from "./AddContact.module.sass";

const AddContact = () => {
    // States
    // ------------------------------------------------------------------------------------------
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const alerts = useSelector(({ alerts }) => alerts.alerts);

    const dispatch = useDispatch();
    const history = useHistory();

    // If there are alerts => show them
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        if (history.location.state) {
            let updatedAlerts = [...alerts];
            let newAlert = "";

            if (history.location.state.added)
                newAlert = `Added "${history.location.state.contactFullName}" contact`;

            updatedAlerts.unshift(newAlert);
            history.replace(history.location.pathname, undefined);

            dispatch(setAlertsAction(updatedAlerts));
        }
    }, [alerts, dispatch, history]);

    // Errors handling
    // -------------------------------------------------------------------------------
    const placeholders = {
        firstName: "First name *",
        lastName: "Last name *",
        email: "@ Email *",
        primaryNumber: "Primary Number *",
        workNumber: "Work Number *",
        notes: "Notes *",
    };

    const showErrors = (flags, placeholders) => {
        for (let [flag, value] of Object.entries(flags)) {
            if (value === false) {
                let errorMsg = `Invalid ${placeholders[flag]}`;
                alert(errorMsg);
                break;
            }
        }
    };

    // Add form handling
    // -----------------------------------------------------------------------------
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let { target: form } = e;

        // Creating a new contact object
        const newContact = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            email: form.email.value,
            primaryNumber: form.primaryNumber.value,
            workNumber: form.workNumber.value,
            notes: form.notes.value,
        };

        // Validation
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

        // add new contact to batabase
        dispatch(addNewContact(contacts, newContact));

        // if user don't want to leave page => don't leave adding page
        // otherwise go to homepage
        if (form.stayOnThePage.checked) {
            history.push(history.location.pathname, {
                added: true,
                contactFullName: `${newContact.firstName} ${newContact.lastName}`,
            });
            form.reset();
        } else
            history.push("/", {
                added: true,
                contactFullName: `${newContact.firstName} ${newContact.lastName}`,
            });
    };

    // Candel adding a new contact => go to homepage
    // ------------------------------------------------------------------------------------------
    const handleCancelEvent = () => history.push("/");

    // Render AddContact
    // ------------------------------------------------------------------------------------------
    return (
        <main>
            <Container>
                <Row className="d-flex justify-content-center align-items-center">
                    <Col xs={12} sm={10} md={8} lg={6} className={s.title}>
                        <h2>Add Contact</h2>
                    </Col>
                    <div className="w-100"></div>
                    <Col xs={12} sm={10} md={8} lg={6} className={s.form}>
                        <Form onSubmit={handleFormSubmit}>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        placeholder="First name"
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="@ Email"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="primaryNumber"
                                    placeholder="Primary number"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="workNumber"
                                    placeholder="Work number"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="notes"
                                    placeholder="Notes"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    name="stayOnThePage"
                                    label="Stay on the page"
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
        </main>
    );
};

export default AddContact;
