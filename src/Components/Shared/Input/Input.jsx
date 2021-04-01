import { useState } from "react";

import s from "./Input.module.sass";

const Input = ({ name, placeholder, onInput }) => {
    const [value, setValue] = useState("");

    const handleInput = (e) => {
        setValue(e.target.value);
        onInput(e);
    };

    return (
        <p>
            <input
                type="text"
                name={name}
                value={value}
                onInput={handleInput}
                placeholder={placeholder}
                className={s.Input}
                autoComplete="off"
            />
        </p>
    );
};

export default Input;
