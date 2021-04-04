import s from "./Input.module.sass";

const Input = ({ name, placeholder, value = "", onInput }) => {
    return (
        <p>
            <input
                type="text"
                name={name}
                value={value}
                onInput={onInput}
                placeholder={placeholder}
                className={s.Input}
                autoComplete="off"
            />
        </p>
    );
};

export default Input;
