import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Heading from "../layout/Heading";
import Wrapper from "../layout/Wrapper";
import ButtonLink from "../common/ButtonLink";
import AdmBookingAccordion from "../accordions/AdmBookingAccordion";
import AdmContactAccordion from "../accordions/AdmContactAccordion";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <AdminLayout>
      <Wrapper cssClass="admin__header-wrapper">
        <div className="admin__header">
          <Heading size="1">Admin Dashboard</Heading>
          <ButtonLink
            cssClass="admin-button btn-primary"
            linkTo="/add-establishment"
          >
            Add new establishment
          </ButtonLink>
        </div>
      </Wrapper>
      <Wrapper cssClass="admin__body-wrapper">
        <div className="admin__accordion-wrapper">
          <div className="admin__accordion-container">
            <AdmBookingAccordion />
          </div>
          <div className="admin__accordion-container">
            <AdmContactAccordion />
          </div>
        </div>
      </Wrapper>
    </AdminLayout>
  );
}
export default Admin;
