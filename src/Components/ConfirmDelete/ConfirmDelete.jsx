import Button from "react-bootstrap/Button";
import Modal from "../Shared/Modal/Modal";

const ConfirmDelete = ({ onConfirm, onCancel }) => {
    return (
        <Modal onClose={onCancel}>
            <h2 style={{ marginBottom: "24px" }}>
                Are you sure you want to delete this contact?
            </h2>
            <div className="justify-content-center">
                <Button variant="primary" onClick={onCancel}>
                    Cancel
                </Button>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmDelete;
