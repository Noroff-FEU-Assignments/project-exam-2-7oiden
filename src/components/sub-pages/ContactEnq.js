import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import AdmContactAccordion from "../administration/AdmContactAccordion";

function ContactEnq() {
  const [auth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <div className="admin__container">
      <AdmContactAccordion />
    </div>
  );
}

export default ContactEnq;
