import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-bootstrap/Modal";
import LoginForm from "../forms/LoginForm";

export default function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon
        icon={faCircleUser}
        onClick={handleShow}
        className="font-awesome-icon"
      />
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
