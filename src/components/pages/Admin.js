import AuthContext from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AdminLayout from "../layout/AdminLayout";
import Heading from "../layout/Heading";
import Wrapper from "../layout/Wrapper";
import ButtonLink from "../buttons/ButtonLink";
import AdmBookingAccordion from "../accordions/AdmBookingAccordion";
import AdmContactAccordion from "../accordions/AdmContactAccordion";
import AdminAddModal from "../modals/AdminAddModal";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

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
            Admin dashboard
          </Heading>
          <Nav className="admin-nav">
            <Nav.Item>
              <NavLink to="bookings" className="admin-nav__link">
                Bookings
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="contact-enquiries" className="admin-nav__link">
                Contact
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="add-establishment" className="admin-nav__link">
                Add establishment
              </NavLink>
            </Nav.Item>
          </Nav>
          {/* <AdminAddModal /> */}
          {/* <ButtonLink
            cssClass="admin-button btn-primary"
            linkTo="/admin/add-establishment"
          >
            Add new establishment
          </ButtonLink> */}
        </div>
        <div className="admin-accordion__wrapper">
          <Outlet />
          {/* <section className="admin-accordion__container">
            <Heading size="2" cssClass="adm-accordion__heading">
              Booking enquiries
            </Heading>
            <AdmBookingAccordion />
          </section> */}
          {/* <section className="admin-accordion__container">
            <Heading size="2" cssClass="adm-accordion__heading" flush>
              Contact enquiries
            </Heading>
            <AdmContactAccordion />
          </section> */}
        </div>
      </Wrapper>
    </AdminLayout>
  );
}
export default Admin;
