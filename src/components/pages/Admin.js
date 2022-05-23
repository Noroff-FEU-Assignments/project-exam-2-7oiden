import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Heading from "../common/Heading";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  const user = JSON.parse(localStorage.getItem("auth"));

  return (
    <AdminLayout>
      <div className="adm__msg-container">
        <Heading size="2" cssClass="adm__welcome-msg">
          Welcome <span className="adm__user-name">{user.user_nicename}</span>
        </Heading>
        <div className="adm__support-msg">
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
