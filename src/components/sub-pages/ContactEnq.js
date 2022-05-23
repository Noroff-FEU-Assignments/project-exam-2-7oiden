import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdmContactAccordion from "../accordions/AdmContactAccordion";

function ContactEnq() {
  const [auth, setAuth] = useContext(AuthContext);

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
