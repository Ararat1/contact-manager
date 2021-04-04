import s from "./Footer.module.sass";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={s.Footer}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="p">
                            Copyright &copy; {year} | Contact Manager
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
