import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Heading from "../layout/Heading";
import AdmBookingAccordion from "../accordions/AdmBookingAccordion";
import AdminLayout from "../layout/AdminLayout";

function Bookings() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
      <div className="admin__container">
        <Heading size="2" cssClass="adm-accordion__heading">
          Booking enquiries
        </Heading>
        <AdmBookingAccordion />
      </div>
  );
}
export default Bookings;
