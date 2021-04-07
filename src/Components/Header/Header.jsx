import { Link, useHistory } from "react-router-dom";
import { Container, Row, Col, Nav, Navbar, Button } from "react-bootstrap";

import s from "./Header.module.sass";

const Header = () => {
    const history = useHistory();

    const handleGoToHomepageEvent = () => history.push("/");
    const handleAddContactEvent = () => history.push("/add-contact");

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
                            </Nav>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
