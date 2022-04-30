import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button"
import BookingForm from "../forms/BookingForm";
import LocationBlock from "../common/LocationBlock";

export default function BookingModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="primary-button" onClick={handleShow}>
        Book Now
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Radisson Blu Royal</Modal.Title>
          <LocationBlock location="Dreggsallmenningen 1" />
        </Modal.Header>
        <Modal.Body>
          <BookingForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className="primary-button">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}