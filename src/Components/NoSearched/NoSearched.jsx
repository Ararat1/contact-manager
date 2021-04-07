import Col from "react-bootstrap/Col";

import s from "./NoSearched.module.sass";

import noSearchedImg from "./Img/noSearched.png";

const NoSearched = () => {
    return (
        <Col xs={10} sm={8} md={6} lg={4} className={s.NoSearched}>
            <img src={noSearchedImg} alt="no-searched" />
            <h2>Not found ..</h2>
        </Col>
    );
};

export default NoSearched;
