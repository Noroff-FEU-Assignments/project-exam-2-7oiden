import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import BookingForm from "../forms/BookingForm";
import LocationBlock from "../common/LocationBlock";

export default function BookingModal({ name, location }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>Book Now</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">{name}</Modal.Title>
          <LocationBlock location={location} />
        </Modal.Header>
        <Modal.Body>
          <BookingForm establishment={name} />
        </Modal.Body>
      </Modal>
    </>
  );
}
