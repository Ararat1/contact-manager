import { useHistory } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import s from "./NoContacts.module.sass";

import noContactsImg from "./Img/noContacts.png";

const NoContacts = () => {
    const history = useHistory();

    const handleAddEvent = () => history.push("/add-contact");

    return (
        <Col xs={10} sm={8} md={6} lg={4} className={s.NoContacts}>
            <img src={noContactsImg} alt="no-searched" />
            <h2>No contacts yet ..</h2>
            <Button variant="secondary" onClick={handleAddEvent}>
                Add Contact <i className="fas fa-plus"></i>
            </Button>
        </Col>
    );
};

export default NoContacts;
