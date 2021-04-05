import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";

import s from "./Menu.module.sass";

const Menu = () => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} className={s.Menu}>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <i className="fas fa-home"></i>
                        </Link>
                    </li>
                    <li>
                        <Link to="/add-contact">
                            <i className="fas fa-plus"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </Col>
    );
};

export default Menu;
