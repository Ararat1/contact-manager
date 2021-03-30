import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../../../Util/ItemTypes";

import Button from "../../../Shared/Button/Button";
import s from "./Contact.module.sass";

const Contact = ({ contact, index, onDelete, onDnD }) => {
    // Drag and Drop
    // ------------------------------------------------------------------------------------------
    const ref = useRef(null);

    const [, drop] = useDrop({
        accept: ItemTypes.CONTACT,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item) {
            if (!ref.current) return;

            const dragIndex = item.index;
            const hoverIndex = index;

            // Don't replace items with themselves
            if (dragIndex === hoverIndex) return;

            onDnD(dragIndex, hoverIndex);
            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CONTACT,
        item: () => {
            return { index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div ref={ref} className={`col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3`}>
            <div className={`${s.Contact}`}>
                <h3>
                    {contact.firstName} {contact.lastName}
                </h3>
                <p>{contact.email}</p>
                <p>{contact.primaryNumber}</p>
                <p>{contact.workNumber}</p>
                <p>{contact.notes}</p>

                <div className={s.options}>
                    <Button bg="red" onClick={() => onDelete(contact.id)}>
                        <i className="fas fa-user-slash"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
