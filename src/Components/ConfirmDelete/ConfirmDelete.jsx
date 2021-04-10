import Button from "react-bootstrap/Button";

import Modal from "../Modal/Modal";

const ConfirmDelete = ({ onConfirm, onCancel }) => {
    // Render ConfirmDelete
    // ------------------------------------------------------------------------------------------
    return (
        <Modal onClose={onCancel}>
            <h2 style={{ marginBottom: "24px" }}>
                Are you sure you want to delete this contact?
            </h2>
            <div className="justify-content-center">
                <Button
                    variant="primary"
                    onClick={onCancel}
                    style={{ marginRight: "16px" }}
                >
                    Cancel
                </Button>
                <Button variant="danger" onClick={onConfirm}>
                    Delete
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmDelete;
