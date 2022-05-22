import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Heading from "../layout/Heading";
import AdmContactAccordion from "../accordions/AdmContactAccordion";

function ContactEnq() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }
  
  return (
    <div className="admin__container">
      <Heading size="2" cssClass="adm-accordion__heading" flush>
        Contact enquiries
      </Heading>
      <AdmContactAccordion />
    </div>
  );
}
export default ContactEnq;
