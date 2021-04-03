import { Link } from "react-router-dom";

import s from "./Menu.module.sass";

const Menu = () => {
    return (
        <div className={`${s.Menu} col-12 col-sm-6 col-md-4 col-lg-3`}>
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
        </div>
    );
};

export default Menu;
