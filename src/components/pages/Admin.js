import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout";
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
    <Layout>
      <Wrapper cssClass="admin-header-wrapper">
        <div className="admin__header">
          <Heading size="1">Admin Dashboard</Heading>
          <ButtonLink cssClass="admin-button" linkTo="/add-establishment">
            Add new establishment
          </ButtonLink>
        </div>
      </Wrapper>
      <Wrapper cssClass="admin-main-wrapper">
        <div className="accordion-wrapper">
          <div className="accordion-container">
            <AdmBookingAccordion />
          </div>
          <div className="accordion-container">
            <AdmContactAccordion />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}
export default Admin;
