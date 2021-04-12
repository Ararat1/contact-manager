import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

import s from "./ContactSkeleton.module.sass";

const ContactSkeleton = () => {
    return (
        <Container>
            <Row className="d-flex justify-content-center">
                <Col xs={10} sm={8} md={6} lg={4} xl={3}>
                    <Card className={s.Contact} bg="light">
                        <Card.Body className={s.cardBody}>
                            <Card.Title className={s.placeholder}>
                                <span>&nbsp;</span>
                            </Card.Title>
                            <Card.Text className={s.placeholder}>
                                <span>&nbsp;</span>
                            </Card.Text>
                            <Card.Text className={s.placeholder}>
                                <span>&nbsp;</span>
                            </Card.Text>
                            <Card.Text className={s.placeholder}>
                                <span>&nbsp;</span>
                            </Card.Text>
                            <Card.Subtitle
                                className={`${s.placeholder} mb-2 text-muted`}
                            >
                                <span>&nbsp;</span>
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Footer className={s.options}>
                            <Button variant="danger" disabled>
                                <i className="fas fa-user-slash"></i>
                            </Button>

                            <Form.Check
                                type="checkbox"
                                className={s.check}
                                disabled
                            />

                            <Button variant="primary" disabled>
                                <i className="fas fa-user-edit"></i>
                            </Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactSkeleton;
