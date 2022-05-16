import CustomNav from "./CustomNav";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

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
