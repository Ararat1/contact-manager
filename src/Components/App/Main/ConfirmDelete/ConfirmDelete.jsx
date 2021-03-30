import Button from "../../../Shared/Button/Button";
import Modal from "../../../Shared/Modal/Modal";

const ConfirmDelete = ({ onConfirm, onCancel }) => {
    return (
        <Modal onClose={onCancel}>
            <h2 style={{ marginBottom: "24px" }}>
                Are you sure you want to delete thie contact?
            </h2>
            <div className="d-flex justify-content-evenly">
                <Button onClick={onCancel}>Cancel</Button>
                <Button bg="red" onClick={onConfirm}>
                    Delete
                </Button>
            </div>
        </Modal>
    );
};

export default ConfirmDelete;
