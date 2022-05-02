import Copyright from "./Copyright";
import CustomNav from "./CustomNav";

function AdminLayout({ children }) {
  return (
    <>
      <div className="sticky-footer-wrapper">
        <header>
          <CustomNav />
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
