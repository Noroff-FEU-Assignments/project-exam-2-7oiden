import Accordion from "react-bootstrap/Accordion";
import moment from "moment";
import AccInfoBlock from "../common/AccInfoBlock";
import DeleteAdmItem from "../buttons/DeleteAdmItem";
import Icon from "@mdi/react";
import { mdiAlertDecagram } from "@mdi/js";

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

  const date = moment(created).format("MMMM Do YYYY - HH:mm");

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
            <span className="adm-accordion__title">
              {firstName} {lastName}
            </span>
          </div>
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
