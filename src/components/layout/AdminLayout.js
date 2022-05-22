import Copyright from "./Copyright";
import CustomNav from "./CustomNav";
import Heading from "./Heading";
import Wrapper from "./Wrapper";
import AdminNav from "../navigation/AdminNav";
import { useLocation, Outlet } from "react-router-dom";

function AdminLayout({ children }) {
  const location = useLocation().pathname;

  console.log(location);

  return (
    <>
      <div className="sticky-footer-wrapper">
        <header>
          <CustomNav />
        </header>
        <Wrapper cssClass="admin__wrapper">
          <div className="admin__header">
            <Heading size="1" cssClass="admin__heading">
              Admin dashboard
            </Heading>
            <AdminNav />
          </div>
          <main className="adm__sub-page-container">
            {location === "/admin" ? children : <Outlet />}
          </main>
        </Wrapper>
      </div>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
export default AdminLayout;
