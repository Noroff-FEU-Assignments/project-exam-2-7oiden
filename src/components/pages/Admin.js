import AuthContext from "../../context/AuthContext";
import { useContext, useState, useEffect, useRef } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Heading from "../layout/Heading";
import Wrapper from "../layout/Wrapper";
import ButtonLink from "../buttons/ButtonLink";
import AdmBookingAccordion from "../accordions/AdmBookingAccordion";
import AdmContactAccordion from "../accordions/AdmContactAccordion";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);
  // const [user, setUser] = useState([]);

  if (!auth) {
    return <Navigate to="/" />;
  }

  const user = JSON.parse(localStorage.getItem("auth"));

  return (
    <AdminLayout>
      <div className="adm__msg-container">
        <div className="adm__welcome-msg">
          Welcome to Holidze admin dashboard <span className="adm__user-name">{user.user_nicename}</span>
        </div>
        <div className="adm__welcome-msg">
          For support please contact helpdesk at{" "}
          <span
            onClick={() => (window.location = "mailto:helpdesk@holidaze.com")}
            className="adm-accordion__link"
          >
            helpdesk@holidaze.com
          </span>
        </div>
      </div>
    </AdminLayout>
  );
}
export default Admin;
