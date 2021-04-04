import { Link } from "react-router-dom";

import s from "./NotFound.module.sass";

const NotFound = () => {
    return (
        <main className={s.NotFound}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <span>
                            <i className="fas fa-ban"></i>
                        </span>
                        <h1>This page is not available</h1>
                        <Link to="/">Go to the homepage</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
