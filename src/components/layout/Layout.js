import CustomNav from "../navigation/CustomNav";
import Newsletter from "../layout/Newsletter";
import Footer from "../navigation/Footer";

function Layout({ children }) {
  return (
    <>
      <div className="sticky-footer-wrapper">
        <header>
          <CustomNav />
        </header>
        <main>
          {children}
          <Newsletter />
        </main>
      </div>
      <Footer />
    </>
  );
}
export default Layout;
