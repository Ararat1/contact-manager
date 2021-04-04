import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useHistory } from "react-router";
import { ItemTypes } from "../../Util/ItemTypes";

import Button from "../Shared/Button/Button";
import s from "./Contact.module.sass";

const Contact = ({ contact, index, onDelete, onDnD }) => {
    const history = useHistory();

    // Handle edit
    // ------------------------------------------------------------------------------------------
    const handleEdit = () => {
        history.push(`/edit-contact/?id=${contact.id}`, { contact });
    };

    // Handle delete
    // ------------------------------------------------------------------------------------------
    const handleDelete = () => onDelete(contact.id);

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
        item: () => ({ index }),
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    // Styles for dragging and dropping
    // ------------------------------------------------------------------------------------------
    let opacity = isDragging ? 0.5 : 1;

    return (
        <div
            ref={ref}
            className={`col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3`}
            style={{ opacity }}
        >
            <div className={`${s.Contact}`}>
                <h3>
                    {contact.firstName} {contact.lastName}
                </h3>
                <p>{contact.email}</p>
                <p>{contact.primaryNumber}</p>
                <p>{contact.workNumber}</p>
                <p>{contact.notes}</p>

                <div className={s.options}>
                    <Button bg="red" onClick={handleDelete}>
                        <i className="fas fa-user-slash"></i>
                    </Button>
                    <Button bg="blue" onClick={handleEdit}>
                        <i className="fas fa-user-edit"></i>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Contact;
