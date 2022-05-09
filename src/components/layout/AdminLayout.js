import Copyright from "./Copyright";
import CustomNav from "./CustomNav";
import AdminIndicator from "../common/AdminIndicator";

function AdminLayout({ children }) {
  return (
    <>
      <div className="sticky-footer-wrapper">
        <header>
          <CustomNav />
          <AdminIndicator />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <Copyright />
      </footer>
    </>
  );
}
export default AdminLayout;
