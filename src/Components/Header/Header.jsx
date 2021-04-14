import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { selectAllContactsAction } from "../../Redux/actions";
import {
    Container,
    Row,
    Col,
    Nav,
    Navbar,
    Button,
    Dropdown,
    DropdownButton,
    ButtonGroup,
    Badge,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";

import s from "./Header.module.sass";

const Header = () => {
    // States
    // ------------------------------------------------------------------------------------------
    const history = useHistory();
    const contactsID = useSelector(({ contacts }) => contacts.contacts).map(
        (contact) => contact.id
    );
    const selectedContactsCount = Object.keys(
        useSelector(({ selectedContacts }) => selectedContacts.selectedContacts)
    ).length;
    const dispatch = useDispatch();

    // Handle events
    // ------------------------------------------------------------------------------------------
    const handleGoToHomepageEvent = () => history.push("/");
    const handleAddContactEvent = () => history.push("/add-contact");

    const handleSelectAllContactsEvent = () =>
        dispatch(selectAllContactsAction(contactsID));

    // Render Header
    // ------------------------------------------------------------------------------------------
    return (
        <header className={s.Header}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <Navbar variant="dark" expand="sm">
                            <Navbar.Brand className={s.logo}>
                                <Link to="/">Contact Manager</Link>
                            </Navbar.Brand>
                            <Nav className="ml-auto">
                                <Button
                                    variant="outline-light"
                                    onClick={handleGoToHomepageEvent}
                                >
                                    <i className="fas fa-home"></i>
                                </Button>

                                <Button
                                    variant="outline-light"
                                    onClick={handleAddContactEvent}
                                >
                                    <i className="fas fa-plus"></i>
                                </Button>

                                <DropdownButton
                                    as={ButtonGroup}
                                    drop="left"
                                    variant="outline-light"
                                    title={<i className="fas fa-cog"></i>}
                                    className={s.dropdownMenu}
                                >
                                    <Dropdown.Item
                                        className="d-flex justify-content-around align-items-center"
                                        onClick={handleSelectAllContactsEvent}
                                    >
                                        Select All
                                        <Badge variant="dark">{`${selectedContactsCount}`}</Badge>
                                    </Dropdown.Item>
                                    {selectedContactsCount ? (
                                        <Dropdown.Item>
                                            Delete Selected
                                        </Dropdown.Item>
                                    ) : (
                                        <OverlayTrigger
                                            placement="bottom"
                                            overlay={
                                                <Tooltip id="tooltip-disabled">
                                                    No contacts selected
                                                </Tooltip>
                                            }
                                        >
                                            <span className="d-inline-block">
                                                <Dropdown.Item disabled>
                                                    Delete Selected
                                                </Dropdown.Item>
                                            </span>
                                        </OverlayTrigger>
                                    )}
                                </DropdownButton>
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
