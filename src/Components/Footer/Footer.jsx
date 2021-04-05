import s from "./Footer.module.sass";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={s.Footer}>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div className="p">
                            Copyright &copy; {year} | Contact Manager
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
