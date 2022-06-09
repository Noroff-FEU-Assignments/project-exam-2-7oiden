import Accordion from "react-bootstrap/Accordion";
import Heading from "../common/Heading";
import FaqItem from "./FaqItem";

function FaqAccordion() {
  return (
    <div className="faq__container">
      <div className="faq__header">
        <Heading size="2" cssClass="faq__heading">
          FAQ
        </Heading>
        <ul>
          <li className="faq-accordion__list-item">
            Can't find what you are looking for in our FAQ?
          </li>
          <li className="faq-accordion__list-item">
            Please drop us a{" "}
            <a href="#contact-section" className="faq-accordion__link">
              message
            </a>
            , and we will get back to you as soon as possible.
          </li>
        </ul>
      </div>
      <Accordion flush>
        <FaqItem eventKey="0" title="How do I book a reservation" />
        <FaqItem eventKey="1" title="How do I cancel a reservation" />
        <FaqItem eventKey="2" title="How do I change a reservation" />
        <FaqItem eventKey="3" title="What if I have special needs" />
        <FaqItem eventKey="4" title="Does Holidaze have a bonus program" />
      </Accordion>
    </div>
  );
}
export default FaqAccordion;
