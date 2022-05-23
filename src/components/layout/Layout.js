import CustomNav from "../navigation/CustomNav";
import Footer from "../navigation/Footer";
import Newsletter from "../layout/Newsletter";

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
