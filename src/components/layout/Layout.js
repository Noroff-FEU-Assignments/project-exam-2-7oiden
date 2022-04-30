import CustomNav from "./CustomNav";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

function Layout({ children }) {
  return (
    <>
      <header>
        <CustomNav />
      </header>
      <div className="flex-wrapper">
        <main>{children}</main>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}
export default Layout;
