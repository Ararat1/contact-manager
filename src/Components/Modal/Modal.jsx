import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

import s from "./Modal.module.sass";

const Modal = ({ children, onClose }) => {
    const $root = document.createElement("div");
    const $background = useRef(null);

    useEffect(() => {
        document.body.appendChild($root);

        const handleKeyDown = ({ key }) => {
            if (key === "Escape") onClose();
        };

        const handleBackgroundClick = ({ target }) => {
            if (target === $background.current) onClose();
        };

        document.documentElement.addEventListener("keydown", handleKeyDown);
        $root.addEventListener("click", handleBackgroundClick);

        return () => {
            document.documentElement.removeEventListener(
                "keydown",
                handleKeyDown
            );
            $root.remove();
        };
    }, [$root, onClose]);

    return ReactDOM.createPortal(
        <Container className={s.Modal} ref={$background} fluid>
            <Row className="justify-content-center">
                <Col xs={12} className={s.block}>
                    <Button
                        variant="light"
                        onClick={onClose}
                        className={s.closeBtn}
                    >
                        <i className="fas fa-times" />
                    </Button>

                    {children}
                </Col>
            </Row>
        </Container>,
        $root
    );
};

export default Modal;
