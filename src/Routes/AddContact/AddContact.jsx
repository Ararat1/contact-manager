import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import { Validator } from "../../Util/Validator";
import { FormatText } from "../../Util/FormatText";
import { setAlertsAction } from "../../Redux/actions";
import { config } from "../../Util/config";
import { showFormErrors } from "../../Util/showFormErrors";

import s from "./AddContact.module.sass";

const AddContact = () => {
    // States
    // ------------------------------------------------------------------------------------------
    const alerts = useSelector(({ alerts }) => alerts.alerts);

    const dispatch = useDispatch();
    const history = useHistory();

    // If there are alerts => show them
    // ------------------------------------------------------------------------------------------
    useEffect(() => {
        if (history.location.state) {
            let updatedAlerts = [...alerts];
            let newAlert = "";

            if (history.location.state.added) {
                newAlert = `Added "${history.location.state.contactFullName}" contact`;
            }

            updatedAlerts.unshift(newAlert);
            history.replace(history.location.pathname, undefined);

            dispatch(setAlertsAction(updatedAlerts));
        }
    }, [alerts, dispatch, history]);

    // Add form handling
    // -----------------------------------------------------------------------------
    const handleFormSubmit = (e) => {
        e.preventDefault();
        let { target: form } = e;

        // Creating a new contact object
        const newContact = {
            firstName: FormatText.text(form.firstName.value),
            lastName: FormatText.text(form.lastName.value),
            email: FormatText.email(form.email.value),
            primaryNumber: FormatText.telNumber(form.primaryNumber.value),
            workNumber: FormatText.telNumber(form.workNumber.value),
            notes: FormatText.text(form.notes.value),
        };

        const newContactDetails = {
            github: form.github.value,
            linkedin: form.linkedin.value,
            skype: form.skype.value,
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
            github: Validator.isLink(newContactDetails.github),
            linkedin: Validator.isLink(newContactDetails.linkedin),
            skype: Validator.isLink(newContactDetails.skype),
        };

        for (let flag of Object.values(validationFlags)) {
            if (flag === false) {
                isValid = false;
                break;
            }
        }

        if (!isValid) {
            showFormErrors(validationFlags);
            return;
        }

        // add new contact to batabase
        let requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        };

        fetch(`${config.database.link}/contacts`, {
            ...requestOptions,
            body: JSON.stringify(newContact),
        })
            .then(() => {
                // if user don't want to leave page => don't leave adding page
                // otherwise go to homepage
                if (form.stayOnThePage.checked) {
                    history.push(history.location.pathname, {
                        added: true,
                        contactFullName: `${newContact.firstName} ${newContact.lastName}`,
                    });
                    form.reset();
                } else {
                    history.push("/", {
                        added: true,
                        contactFullName: `${newContact.firstName} ${newContact.lastName}`,
                    });
                }
            })
            .catch((err) => console.log(err));
    };

    // Candel adding a new contact => go to homepage
    // ------------------------------------------------------------------------------------------
    const handleCancelEvent = () => history.push("/");

    // Render AddContact
    // ------------------------------------------------------------------------------------------
    return (
        <main className={s.AddContact}>
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
                                        placeholder="First name *"
                                        autoComplete="off"
                                    />
                                </Form.Group>

                                <Form.Group as={Col}>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder="Last name *"
                                        autoComplete="off"
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="@ Email *"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="primaryNumber"
                                    placeholder="Primary phone number *"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="workNumber"
                                    placeholder="Work phone number *"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="notes"
                                    placeholder="Notes *"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="github"
                                    placeholder="GitHub link"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="linkedin"
                                    placeholder="Linkedin link"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    type="text"
                                    name="skype"
                                    placeholder="Skype link"
                                    autoComplete="off"
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Check
                                    type="checkbox"
                                    name="stayOnThePage"
                                    id="stayOnThePage"
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
