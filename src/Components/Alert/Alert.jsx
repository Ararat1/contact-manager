import { Container, Row, Col, Alert as AlertBootstrap } from "react-bootstrap";

import s from "./Alert.module.sass";

const Alert = ({ message }) => {
    return (
        <Container className={s.Alert}>
            <Row>
                <Col xs={12} sm={6} md={5} lg={4}>
                    <AlertBootstrap variant="dark">{message}</AlertBootstrap>
                </Col>
            </Row>
        </Container>
    );
};

export default Alert;
