import Heading from "../layout/Heading";
import AdmBookingAccordion from "../accordions/AdmBookingAccordion";

function Bookings() {
  return (
    <section className="admin-accordion__container">
      <Heading size="2" cssClass="adm-accordion__heading">
        Booking enquiries
      </Heading>
      <AdmBookingAccordion />
    </section>
  );
}
export default Bookings;
