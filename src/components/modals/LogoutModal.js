import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function LoginModal() {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");

    if (confirmLogout) {
      history("/");
      setAuth(null);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <FontAwesomeIcon
        icon={faCircleUser}
        onClick={handleShow}
        class="font-awesome-icon admin-logged-in"
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="login"
      >
        <Modal.Header closeButton>
          <Modal.Title>Do you want to log out?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button onClick={handleLogout} className="primary-button">
            Log out
          </Button>
          <Button onClick={handleClose} className="secondary-button">
            Stay logged in
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
}
