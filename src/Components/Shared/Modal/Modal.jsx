import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import s from "./Modal.module.sass";

const Modal = ({ children, onClose }) => {
    const $root = document.createElement("div");
    const $background = useRef(null);

    useEffect(() => {
        document.body.appendChild($root);

        const handleKeyUp = ({ key }) => {
            if (key === "Escape") {
                onClose();
            }
        };

        const handleBackgroundClick = ({ target }) => {
            if (target === $background.current) onClose();
        };

        document.documentElement.addEventListener("keyup", handleKeyUp);
        $root.addEventListener("click", handleBackgroundClick);

        return () => {
            document.documentElement.removeEventListener("keyup", handleKeyUp);
            $root.remove();
        };
    }, []);

    return ReactDOM.createPortal(
        <div className={`${s.Modal} container-fluid`} ref={$background}>
            <div className="row d-flex justify-content-center">
                <div className={`col-12 ${s.block}`}>
                    <button onClick={onClose} className={s.closeBtn}>
                        <i className="fas fa-times" />
                    </button>

                    {children}
                </div>
            </div>
        </div>,
        $root
    );
};

export default Modal;
