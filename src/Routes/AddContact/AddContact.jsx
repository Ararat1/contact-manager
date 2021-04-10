import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { addNewContact } from "../../Redux/middleware";
import { Validator } from "../../Util/Validator";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import s from "./AddContact.module.sass";

const AddContact = () => {
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const dispatch = useDispatch();
    const history = useHistory();

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

    // * -----------------------------------------------------------------------------
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

        dispatch(addNewContact(contacts, newContact));

        if (form.stayOnThePage.checked) form.reset();
        else
            history.push("/", {
                added: true,
                contactFullName: `${newContact.firstName} ${newContact.lastName}`,
            });
    };

    const handleCancelEvent = () => history.push("/");

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
