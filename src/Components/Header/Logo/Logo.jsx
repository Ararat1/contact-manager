import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";

import s from "./Logo.module.sass";

const Logo = () => {
    return (
        <Col xs={12} sm={6} md={5} lg={4} className={s.Logo}>
            <h2>
                <Link to="/">Contact Manager</Link>
            </h2>
        </Col>
    );
};

export default Logo;
