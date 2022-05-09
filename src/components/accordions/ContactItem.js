import Accordion from "react-bootstrap/Accordion";
import moment from "moment";
import AccInfoBlock from "../common/AccInfoBlock";

function ContactItem(props) {
  const { firstName, lastName, email, subject, message, created, eventKey } = props;

  const date = moment(created).format("YYYY-MM-DD, HH:mm");

  // console.log(eventKey);

  return (
    <Accordion.Item eventKey={eventKey}>
      <Accordion.Header as="div">
        <div className="accordion__header-container">
          <span className="accordion__header">
            {firstName} {lastName}
          </span>
          <span className="accordion__date">{date}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <div className="accordion__body-wrapper">
          <AccInfoBlock label="Subject:" info={subject} />
          <div className="accordion__info-container">
            <p className="accordion__label">Email:</p>
            <p
              onClick={() =>
                (window.location = `mailto:${email}?subject=Re: ${subject}`)
              }
              className="accordion__link"
            >
              {email}
            </p>
          </div>
          <AccInfoBlock label="Message:" info={message} />
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default ContactItem;
