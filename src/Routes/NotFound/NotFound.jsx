import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import s from "./NotFound.module.sass";

const NotFound = () => {
    return (
        <main className={s.NotFound}>
            <Container>
                <Row>
                    <Col xs={12} className="text-center">
                        <span>
                            <i className="fas fa-ban"></i>
                        </span>
                        <h1>This page is not available</h1>
                        <Link to="/">Go to the homepage</Link>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default NotFound;
