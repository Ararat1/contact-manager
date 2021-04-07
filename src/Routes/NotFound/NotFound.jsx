import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import s from "./NotFound.module.sass";

import notFoundImg from "./Img/notFound.png";

const NotFound = () => {
    const history = useHistory();

    const handleGoToHomepageEvent = () => history.push("/");

    const handleAddContactEvent = () => history.push("/add-contact");

    return (
        <main className={s.NotFound}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={10} sm={8} md={6} lg={4} className="text-center">
                        <img src={notFoundImg} alt="not-found" />
                        <Button
                            variant="secondary"
                            onClick={handleGoToHomepageEvent}
                        >
                            Go to homepage <i className="fas fa-home"></i>
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={handleAddContactEvent}
                        >
                            Add Contact <i className="fas fa-plus"></i>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default NotFound;
