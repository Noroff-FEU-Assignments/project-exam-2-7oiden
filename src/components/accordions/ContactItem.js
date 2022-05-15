import Accordion from "react-bootstrap/Accordion";
import moment from "moment";
import AccInfoBlock from "../common/AccInfoBlock";
import DeleteAdmItem from "../buttons/DeleteAdmItem";

function ContactItem(props) {
  const {
    id,
    type,
    firstName,
    lastName,
    email,
    subject,
    message,
    created,
    eventKey,
  } = props;

  const date = moment(created).format("YYYY-MM-DD, HH:mm");

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header as="div">
        <div className="adm-accordion__header-container">
          <span className="adm-accordion__header">
            {firstName} {lastName}
          </span>
          <span className="adm-accordion__date">{date}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="adm-accordion__body-wrapper">
          <AccInfoBlock label="Subject:" info={subject} />
          <div className="adm-accordion__info-container">
            <p className="adm-accordion__label">Email:</p>
            <p
              onClick={() =>
                (window.location = `mailto:${email}?subject=Re: ${subject}`)
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
export default ContactItem;
