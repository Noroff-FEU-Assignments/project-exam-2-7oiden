import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Heading from "../layout/Heading";
import Wrapper from "../layout/Wrapper";
import ButtonLink from "../buttons/ButtonLink";
import AdmBookingAccordion from "../accordions/AdmBookingAccordion";
import AdmContactAccordion from "../accordions/AdmContactAccordion";

function Admin() {
  const [auth, setAuth] = useContext(AuthContext);

  if (!auth) {
    return <Navigate to="/" />;
  }

  return (
    <AdminLayout>
      {/* <Wrapper cssClass="admin__header-wrapper"></Wrapper> */}
      <Wrapper cssClass="admin__wrapper">
        <div className="admin__header">
          <Heading size="1" cssClass="admin__heading">
            Admin Dashboard
          </Heading>
          <ButtonLink
            cssClass="admin-button btn-primary"
            linkTo="/add-establishment"
          >
            Add new establishment
          </ButtonLink>
        </div>
        <div className="admin-accordion__wrapper">
          <section className="admin-accordion__container">
            <Heading size="2" cssClass="adm-accordion__heading">
              Booking enquiries
            </Heading>
            <AdmBookingAccordion />
          </section>
          <section className="admin-accordion__container">
            <Heading size="2" cssClass="adm-accordion__heading" flush>
              Contact enquiries
            </Heading>
            <AdmContactAccordion />
          </section>
        </div>
      </Wrapper>
    </AdminLayout>
  );
}
export default Admin;
