import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useHistory } from "react-router";
import { ItemTypes } from "../../Util/ItemTypes";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
        <Col ref={ref} xs={10} sm={8} md={6} lg={4} xl={3} style={{ opacity }}>
            <Card className={s.Contact}>
                <Card.Body>
                    <Card.Title>
                        {contact.firstName} {contact.lastName}
                    </Card.Title>
                    <Card.Text>{contact.email}</Card.Text>
                    <Card.Text>{contact.primaryNumber}</Card.Text>
                    <Card.Text>{contact.workNumber}</Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">
                        {contact.notes}
                    </Card.Subtitle>
                </Card.Body>
                <Card.Footer className={s.options}>
                    <Button variant="danger" onClick={handleDelete}>
                        <i className="fas fa-user-slash"></i>
                    </Button>
                    <Button variant="primary" onClick={handleEdit}>
                        <i className="fas fa-user-edit"></i>
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Contact;
