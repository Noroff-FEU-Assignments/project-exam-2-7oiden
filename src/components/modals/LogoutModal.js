import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import AdmProfileIcon from "../icons/AdmProfileIcon";

export default function LoginModal() {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const [, setAuth] = useContext(AuthContext);
 
  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    // console.log(auth);

    if (confirmLogout) {
      history("/");
      setAuth(null);
    }
  }

  const user = JSON.parse(localStorage.getItem("auth"));
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AdmProfileIcon
        onClick={handleShow}
        className="font-awesome-icon admin-logged-in"
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
          <span className="logout-modal__user">
            You are currently logged in as: <em>{user.user_nicename}</em>
          </span>
          <div className="logout-modal__wrapper">
            <Button
              variant="primary"
              onClick={handleLogout}
              className="logout-button"
            >
              Log out
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Stay logged in
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
