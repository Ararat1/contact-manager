import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import s from "./Toolbar.module.sass";

const Toolbar = () => {
    return (
        <section className={s.Toolbar}>
            <Container>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <div className={`${s.btnGroup}`}>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                            <button>
                                <i className="fas fa-user-plus"></i>
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Toolbar;
