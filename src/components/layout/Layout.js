import AdminIndicator from "../common/AdminIndicator";
import CustomNav from "./CustomNav";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Layout({ children }) {
  return (
    <>
      <div className="sticky-footer-wrapper">
        <header>
          <CustomNav />
          <AdminIndicator />
        </header>
        <main>{children}</main>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
export default Layout;
