import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LoginIcon from "../icons/LoginIcon";
import LoginForm from "../forms/LoginForm";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="login-button">
        <LoginIcon />
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="login"
      >
        <Modal.Header closeButton>
          <Modal.Title>Account login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}
