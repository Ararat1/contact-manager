import s from "./Menu.module.sass";

const Menu = () => {
    return (
        <div className={`${s.Menu} col-12 col-sm-6 col-md-4 col-lg-3`}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Contacts</a>
                    </li>
                    <li>
                        <a href="/">Edit</a>
                    </li>
                    <li>
                        <a href="/">Add</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;
