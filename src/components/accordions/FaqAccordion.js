import Accordion from "react-bootstrap/Accordion";
import Heading from "../layout/Heading";
import FaqItem from "./FaqItem";

function FaqAccordion() {
  return (
    <div className="faq__container">
      <Heading size="2" cssClass="faq__heading">
        FAQ
      </Heading>
      <ul>
        <li className="faq__list-item">
          Can't find what you are looking for in our <strong>FAQ?</strong>
        </li>
        <li className="faq__list-item">
          Please drop us a{" "}
          <a href="#contact-section" className="faq__link">
            message
          </a>
          , and we will get back to you as soon as possible.
        </li>
      </ul>
      <Accordion flush>
        <FaqItem eventKey="0" qNumber="1" />
        <FaqItem eventKey="1" qNumber="2" />
        <FaqItem eventKey="2" qNumber="3" />
        <FaqItem eventKey="3" qNumber="4" />
        <FaqItem eventKey="4" qNumber="5" />
      </Accordion>
    </div>
  );
}
export default FaqAccordion;
