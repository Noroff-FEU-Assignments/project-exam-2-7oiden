import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import ProfileImage from "../common/ProfileImage";

export default function LoginModal() {
  const history = useNavigate();
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const [user, setUser] = useState([]);

  function handleLogout() {
    const confirmLogout = window.confirm("Are you sure you want to log out?");

    console.log(auth);

    if (confirmLogout) {
      history("/");
      setAuth(null);
    }
  }

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    if (useRef) {
      setUser(user);
    }
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ProfileImage
        // icon={faCircleUser}
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
              onClick={handleLogout}
              className="primary-button log-button"
            >
              Log out
            </Button>
            <Button
              variant="secondary"
              onClick={handleClose}
              className="secondary-button log-button"
            >
              Stay logged in
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
