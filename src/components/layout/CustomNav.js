import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink, Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import brandLogo from "../../images/holidaze-logo.png";
import LoginModal from "../modals/LoginModal";
import LogoutModal from "../modals/LogoutModal";
import SearchModal from "../modals/SearchModal";
import { MenuIcon } from "../icons/MaterialIcons";

function CustomNav() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <header>
      <Wrapper cssClass="nav__wrapper">
        <Navbar bg="white" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={brandLogo}
                  alt="Holidaze logo"
                  className="navbar__logo"
                ></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"><MenuIcon /> </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navbar__container">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/overview"
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  Establishments
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  About
                </NavLink>
                <NavLink
                  to="/admin"
                  className={({ isActive }) =>
                    isActive
                      ? "navbar__link navbar__link--active"
                      : "navbar__link"
                  }
                >
                  {auth ? "Admin" : ""}
                </NavLink>
              </Nav>
            </Navbar.Collapse>
            <div className="navbar__icon-box">
              <SearchModal />
              {auth ? <LogoutModal /> : <LoginModal />}
            </div>
          </Container>
        </Navbar>
      </Wrapper>
    </header>
  );
}

export default CustomNav;
