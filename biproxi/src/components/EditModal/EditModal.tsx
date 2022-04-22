import Modal from "react-modal";
import React from "react";

interface EditModalType {
    isOpen: boolean;
    onRequestClose: () => void;
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
}

const EditModal = ({
  isOpen,
  onRequestClose,
  onSubmit,
  children,
  ...props
}: EditModalType) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Edit Modal"
            {...props}
        >
            {children}
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default EditModal;