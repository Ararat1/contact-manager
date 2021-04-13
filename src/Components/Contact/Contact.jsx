import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
    Col,
    Card,
    Button,
    Form,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import PropTypes from "prop-types";

import { ItemTypes } from "../../Util/ItemTypes";
import {
    selectContactAction,
    unselectContactAction,
} from "../../Redux/actions";

import s from "./Contact.module.sass";

const Contact = ({ contact, index, onDelete, onDnD }) => {
    // States
    // ------------------------------------------------------------------------------------------
    const history = useHistory();
    const isSelected = useSelector(
        ({ selectedContacts }) => selectedContacts.selectedContacts
    )[contact.id];

    const dispatch = useDispatch();

    // Handle edit
    // ------------------------------------------------------------------------------------------
    const handleEdit = () => {
        history.push(`/edit-contact/${contact.id}`, { contact });
    };

    // Handle delete
    // ------------------------------------------------------------------------------------------
    const handleDelete = () =>
        onDelete(contact.id, `${contact.firstName} ${contact.lastName}`);

    // Handle Select
    // ------------------------------------------------------------------------------------------
    const handleSelect = ({ target: { checked } }) => {
        if (checked) {
            dispatch(selectContactAction(contact.id));
            return;
        }

        dispatch(unselectContactAction(contact.id));
    };

    // Handle More Info
    // ------------------------------------------------------------------------------------------
    const handleMoreInfo = () =>
        history.push(`/details/${contact.id}`, { contact });

    // Drag and Drop
    // ------------------------------------------------------------------------------------------
    const ref = useRef(null);

    // Render Contact
    // ------------------------------------------------------------------------------------------
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

    // Styles for drag and drop
    // ------------------------------------------------------------------------------------------
    let opacity = isDragging ? 0.5 : 1;

    // Render Contact
    // ------------------------------------------------------------------------------------------
    return (
        <Col ref={ref} xs={10} sm={8} md={6} lg={4} xl={3} style={{ opacity }}>
            <Card
                className={s.Contact}
                text={isSelected ? "light" : "dark"}
                bg={isSelected ? "dark" : "light"}
            >
                <Card.Body className={s.cardBody}>
                    <Card.Title>
                        {contact.firstName} {contact.lastName}
                    </Card.Title>
                    <Card.Text>{contact.email}</Card.Text>
                    <Card.Text>{contact.primaryNumber}</Card.Text>
                    <Card.Text>{contact.workNumber}</Card.Text>
                    <Card.Subtitle className={`${s.notes} mb-2 text-muted`}>
                        {contact.notes}
                    </Card.Subtitle>

                    <OverlayTrigger
                        placement="bottom"
                        overlay={
                            <Tooltip id={`tooltip-bottom`}>More Info</Tooltip>
                        }
                    >
                        <Button
                            variant="light"
                            className={s.detailsBtn}
                            onClick={handleMoreInfo}
                        >
                            <i className="fas fa-info-circle"></i>
                        </Button>
                    </OverlayTrigger>
                </Card.Body>
                <Card.Footer className={s.options}>
                    <Button variant="danger" onClick={handleDelete}>
                        <i className="fas fa-user-slash"></i>
                    </Button>
                    <Form.Check
                        type="checkbox"
                        className={s.check}
                        onChange={handleSelect}
                        checked={isSelected === undefined ? false : true}
                    />
                    <Button variant="primary" onClick={handleEdit}>
                        <i className="fas fa-user-edit"></i>
                    </Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

// PropTypes
Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        primaryNumber: PropTypes.string.isRequired,
        workNumber: PropTypes.string.isRequired,
        notes: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
    onDnD: PropTypes.func.isRequired,
};

export default Contact;
