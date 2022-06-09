import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { NavLink, Link } from "react-router-dom";
import Wrapper from "../layout/Wrapper";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import brandLogo from "../../images/holidaze-logo.png";
import { MenuIcon } from "../icons/MaterialIcons";
import SearchModal from "../modals/SearchModal";
import LoginModal from "../modals/LoginModal";
import LogoutModal from "../modals/LogoutModal";

function CustomNav() {
  const [auth] = useContext(AuthContext);

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
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              <MenuIcon color="#222222" size="2rem" />{" "}
            </Navbar.Toggle>
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
            <div className="navbar__icon-wrapper">
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
