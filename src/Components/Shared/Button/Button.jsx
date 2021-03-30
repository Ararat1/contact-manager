import s from "./Button.module.sass";

const Button = ({ bg = "blue", onClick, children }) => {
    let background = bg === "blue" ? s.blue : s.red;

    return (
        <button className={`${s.Button} ${background}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
