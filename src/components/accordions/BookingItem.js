import Accordion from "react-bootstrap/Accordion";
import moment from "moment";
import AccInfoBlock from "../common/AccInfoBlock";
import DeleteAdmItem from "../buttons/DeleteAdmItem";
import Icon from "@mdi/react";
import { mdiAlertDecagram } from "@mdi/js";

function BookingItem(props) {
  const {
    id,
    type,
    establishment,
    guests,
    firstName,
    lastName,
    email,
    // location,
    message,
    created,
    eventKey,
    fromDate,
    toDate,
  } = props;

  const date = moment(created).format("MMMM Do YYYY - HH:mm");
  const toDateForm = moment(toDate).format("MMMM Do YYYY");
  const fromDateForm = moment(fromDate).format("MMMM Do YYYY");

  //adds a badge if given post is created today
  let ifNew = "none";

  const today = moment(new Date()).format("MMMM Do YYYY");

  const logDate = moment(created).format("MMMM Do YYYY");

  if (logDate === today) {
    ifNew = "block";
  }

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header as="div">
        <div className="adm-accordion__header-container">
          <div className="adm-accordion__title-wrapper">
            <Icon
              path={mdiAlertDecagram}
              style={{ display: ifNew }}
              className="new-icon"
              color="default"
            />
            <span className="adm-accordion__title">{establishment}</span>
          </div>
          <span className="adm-accordion__date">{date}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="adm-accordion__body-wrapper">
          <AccInfoBlock label="From date:" info={fromDateForm} />
          <AccInfoBlock label="To date:" info={toDateForm} />
          <AccInfoBlock label="Guests:" info={guests} />
          <AccInfoBlock label="Name:" info={`${firstName} ${lastName}`} />
          <div className="adm-accordion__info-container">
            <p className="adm-accordion__label">Email:</p>
            <p
              onClick={() =>
                (window.location = `mailto:${email}?subject=Booking: ${establishment}`)
              }
              className="adm-accordion__link"
            >
              {email}
            </p>
          </div>
          <AccInfoBlock label="Message:" info={message} />
          <DeleteAdmItem id={id} type={type} />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default BookingItem;
