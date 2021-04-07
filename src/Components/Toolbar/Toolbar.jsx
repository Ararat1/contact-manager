import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import s from "./Toolbar.module.sass";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedContactsAction } from "../../Redux/actions";

const Toolbar = () => {
    const contacts = useSelector(({ contacts }) => contacts.contacts);
    const dispatch = useDispatch();

    // Search
    // ------------------------------------------------------------------------------------------
    const handleSearchEvent = ({ target: { value: searchString } }) => {
        searchString = searchString.toString();
        searchString = searchString.trim();
        searchString = searchString.replace(/\s+/g, " ");

        if (searchString.length > 0) {
            const pattern = new RegExp(`${searchString}`, "gim");

            let updatedSearchedContacts = contacts.filter(
                ({ firstName, lastName }) => {
                    let fullName = `${firstName} ${lastName}`;

                    return pattern.test(fullName);
                }
            );

            dispatch(setSearchedContactsAction(updatedSearchedContacts));
            return;
        }

        dispatch(setSearchedContactsAction(null));
    };

    return (
        <section className={s.Toolbar}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} sm={8} md={6} lg={4}>
                        <InputGroup
                            className="mb-3"
                            onInput={handleSearchEvent}
                        >
                            <FormControl placeholder="Contact name .." />
                            <InputGroup.Append>
                                <InputGroup.Text>
                                    <i className="fas fa-search"></i>
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Toolbar;
