import Copyright from "./Copyright";
import CustomNav from "./CustomNav";

function AdminLayout({ children }) {
  return (
    <>
      <header>
        <CustomNav />
      </header>
      <div className="sticky-footer-wrapper">
        <main>{children}</main>
      </div>
      <footer>
          <Copyright />
      </footer>
    </>
  );
}
export default AdminLayout;
