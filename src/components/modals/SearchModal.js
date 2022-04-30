import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import SearchIcon from "../icons/SearchIcon";
import SearchForm from "../forms/SearchForm";

export default function SearchModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="navbar__icon-box">
        <SearchIcon />
      </button>

      <Modal show={show} onHide={handleClose} className="login">
        <Modal.Header closeButton>
          <Modal.Title>Search all</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <SearchForm />
          <ul>
            <li>search item 1</li>
            <li>search item 2</li>
            <li>search item 3</li>
          </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}
