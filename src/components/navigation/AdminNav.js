import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

function AdminNav() {
  return (
    <Nav className="admin-nav">
      <Nav.Item>
        <NavLink
          to="bookings"
          className={({ isActive }) =>
            isActive
              ? "admin-nav__link admin-nav__link--active"
              : "admin-nav__link"
          }
        >
          Booking enquires
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="contact-enquiries"
          className={({ isActive }) =>
            isActive
              ? "admin-nav__link admin-nav__link--active"
              : "admin-nav__link"
          }
        >
          Contact enquires
        </NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink
          to="add-establishment"
          className={({ isActive }) =>
            isActive
              ? "admin-nav__link admin-nav__link--active"
              : "admin-nav__link"
          }
        >
          Add establishment
        </NavLink>
      </Nav.Item>
    </Nav>
  );
}

export default AdminNav;
