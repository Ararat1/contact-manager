import PropTypes from "prop-types";
import { Container, Row, Col, Alert as AlertBootstrap } from "react-bootstrap";

import s from "./Alerts.module.sass";

const Alert = ({ message }) => {
    // Render Alert
    // ------------------------------------------------------------------------------------------
    return (
        <Col xs={12} sm={6} md={5} className={s.Alert}>
            <AlertBootstrap variant="dark">{message}</AlertBootstrap>
        </Col>
    );
};

const Alerts = ({ messages }) => {
    // Render Alerts
    // ------------------------------------------------------------------------------------------
    return (
        <Container className={s.Alerts}>
            <Row className="d-flex flex-column align-items-end justify-content-end m-0">
                {messages.map((msg, index) => (
                    <Alert message={msg} key={index} />
                ))}
            </Row>
        </Container>
    );
};

// Prop-Types
Alert.propTypes = {
    message: PropTypes.string.isRequired,
};

Alerts.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Alerts;
