import Accordion from "react-bootstrap/Accordion";
import moment from "moment";
import AccInfoBlock from "../common/AccInfoBlock";
import DeleteAdmItem from "../buttons/DeleteAdmItem";

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

  const date = moment(created).format("YYYY-MM-DD, HH:mm");

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header as="div">
        <div className="adm-accordion__header-container">
          <div className="adm-accordion__header-wrapper">
            <span className="adm-accordion__header">{establishment}</span>
          </div>
          <span className="adm-accordion__date">{date}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="adm-accordion__body-wrapper">
          <AccInfoBlock label="From date:" info={fromDate} />
          <AccInfoBlock label="To date:" info={toDate} />
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
