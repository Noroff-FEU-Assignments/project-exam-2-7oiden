import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "../layout/Heading";
import SearchForm from "../forms/SearchForm";
import ProductCard from "../products/ProductCard";
// import { NavItem } from "react-bootstrap";
import hotel1 from "../../images/hotel-1.jpg";
import hotel2 from "../../images/hotel-2.jpg";
import hotel3 from "../../images/hotel-3.jpg";

function Overview() {
  return (
    <Layout>
      <div className="overview__bg-image"></div>
      <Wrapper cssClass="overview-wrapper">
        <div className="overview__header">
          <Heading size="1">Establishment overview</Heading>
          <SearchForm />
        </div>
        <Container fluid>
          <Row className="gy-5 gx-5">
            <ProductCard
              key="33"
              image={hotel1}
              name="Radisson Blu Royal"
              address="Dreggsallmenningen 1"
              rating="4.62"
              reviews="32"
              category="Hotel"
              price="1500"
            />
            <ProductCard
              key="34"
              image={hotel2}
              name="Scandic Ørnen"
              address="Lars Hilles gate 18"
              rating="4.85"
              reviews="24"
              category="Hotel"
              price="2249"
            />
            <ProductCard
              key="35"
              image={hotel3}
              name="Augustin Hotel"
              address="C.Sundts Gate 22"
              rating="4.71"
              reviews="41"
              category="Hotel"
              price="1340"
            />
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
}
export default Overview;
