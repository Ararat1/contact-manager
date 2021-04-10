import { Container, Row, Col } from "react-bootstrap";

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
                    <Col sm={12}>
                        <p>Copyright &copy; {year} | Contact Manager</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
