import s from "./Header.module.sass";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

const Header = () => {
    return (
        <header className={s.Header}>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    <Logo />
                    <Menu />
                </div>
            </div>
        </header>
    );
};

export default Header;
