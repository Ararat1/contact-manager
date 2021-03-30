import s from "./Logo.module.sass";

const Logo = () => {
    return (
        <div className={`${s.Logo} col-12 col-sm-6 col-md-5 col-lg-4`}>
            <h2>Contact Manager</h2>
        </div>
    );
};

export default Logo;
