import Heading from "../layout/Heading";
import AdmContactAccordion from "../accordions/AdmContactAccordion";

function ContactEnq() {
  return (
    <section className="admin-accordion__container">
      <Heading size="2" cssClass="adm-accordion__heading" flush>
        Contact enquiries
      </Heading>
      <AdmContactAccordion />
    </section>
  );
}
export default ContactEnq;
