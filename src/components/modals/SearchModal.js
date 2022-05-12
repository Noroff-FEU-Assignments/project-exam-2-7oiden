import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { SearchIcon } from "../icons/MaterialIcons";
import SearchModalList from "./SearchModalList";

export default function SearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const location = useLocation();
  // console.log(location);

  useEffect(() => {
    setShow(false);
  }, [location]);

  return (
    <>
      <button onClick={handleShow} className="navbar__search-icon-box">
        <SearchIcon />
      </button>
      <Modal show={show} onHide={handleClose} className="login">
        <Modal.Header closeButton>
          <Modal.Title>Search all establishments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchModalList />
        </Modal.Body>
      </Modal>
    </>
  );
}
