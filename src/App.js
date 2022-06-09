import "./sass/style.scss";
import "react-widgets/scss/styles.scss";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Support from "./components/pages/Support";
import Overview from "./components/pages/Overview";
import Details from "./components/pages/Details";
import Admin from "./components/pages/Admin";
import AddEst from "./components/sub-pages/AddEst";
import { ScrollToTop } from "./components/utils/ScrollToTop";
import Bookings from "./components/sub-pages/Bookings";
import ContactEnq from "./components/sub-pages/ContactEnq";

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/support" element={<Support />}></Route>
            <Route path="/admin" element={<Admin />}>
              <Route path="bookings" element={<Bookings />}></Route>
              <Route path="contact-enquiries" element={<ContactEnq />}></Route>
              <Route
                path="/admin/add-establishment"
                element={<AddEst />}
              ></Route>
            </Route>
          </Routes>
        </ScrollToTop>
      </Router>
    </AuthProvider>
  );
}

export default App;
