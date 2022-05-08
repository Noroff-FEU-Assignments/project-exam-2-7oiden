import Accordion from "react-bootstrap/Accordion";
import moment from "moment";

function ContactItem(props) {
  const { firstName, lastName, email, subject, message, created } = props;

  const date = moment(created).format("MMMM Do YYYY, HH:mm");

  return (
    <Accordion.Item eventKey="0">
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
          <div className="accordion__info-container">
            <p className="accordion__sub-header">Subject:</p>
            <p className="accordion__text">{subject}</p>
          </div>
          <div className="accordion__info-container">
            <p className="accordion__sub-header">Email:</p>
            <p
              onClick={() =>
                (window.location = `mailto:${email}?subject=Re:${subject}`)
              }
              className="accordion__link"
            >
              {email}
            </p>
          </div>
          <div className="accordion__info-container">
            <p className="accordion__sub-header">Message:</p>
            <p className="accordion__text">{message}</p>
          </div>
        </div>
      </Accordion.Body>
    </Accordion.Item>
  );
}
export default ContactItem;
