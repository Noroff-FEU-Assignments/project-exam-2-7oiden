import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import AdmBookingAccordion from "../administration/AdmBookingAccordion";

function Bookings() {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="admin__container">
      <AdmBookingAccordion />
    </div>
  );
}

export default Bookings;
