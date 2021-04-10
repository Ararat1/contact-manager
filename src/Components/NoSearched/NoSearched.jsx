import { Col } from "react-bootstrap";

import noSearchedImg from "./Img/noSearched.png";

import s from "./NoSearched.module.sass";

const NoSearched = () => {
    // Rendering
    // ------------------------------------------------------------------------------------------
    return (
        <Col xs={10} sm={8} md={6} lg={4} className={s.NoSearched}>
            <img src={noSearchedImg} alt="no-searched" />
            <h2>Not found ..</h2>
        </Col>
    );
};

export default NoSearched;
