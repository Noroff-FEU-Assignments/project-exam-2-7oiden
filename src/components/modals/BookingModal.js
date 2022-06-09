import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import LocationBlock from "../common/LocationBlock";
import BookingForm from "../forms/BookingForm";

export default function BookingModal({ name, address }) {
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
          <LocationBlock address={address} />
        </Modal.Header>
        <Modal.Body>
          <BookingForm establishment={name} />
        </Modal.Body>
      </Modal>
    </>
  );
}
