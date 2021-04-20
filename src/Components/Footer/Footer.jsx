import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";

import s from "./Footer.module.sass";

const Footer = () => {
    // Get current year
    // ------------------------------------------------------------------------------------------
    const year = new Date().getFullYear();

    // Render Footer
    // ------------------------------------------------------------------------------------------
    return (
        <footer className={s.Footer}>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Copyright &copy; {year} |
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-bottom">
                                        Client Side
                                    </Tooltip>
                                }
                            >
                                <a
                                    href="https://github.com/Ararat1/contact-manager"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </OverlayTrigger>
                            _
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id="tooltip-bottom">
                                        Server Side
                                    </Tooltip>
                                }
                            >
                                <a
                                    href="https://github.com/Ararat1/contact-manager-backend"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fab fa-github"></i>
                                </a>
                            </OverlayTrigger>
                            | Contact Manager
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
