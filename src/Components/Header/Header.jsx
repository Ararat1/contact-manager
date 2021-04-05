import s from "./Header.module.sass";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Header = () => {
    return (
        <header className={s.Header}>
            <Container>
                <Row className="justify-content-between">
                    <Logo />
                    <Menu />
                </Row>
            </Container>
        </header>
    );
};

export default Header;
