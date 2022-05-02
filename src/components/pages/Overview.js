import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
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
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = PRODUCTS_URL;

  useEffect(function () {
    async function getproduct() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data);
        setproduct(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getproduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <Loader />;

  if (error) {
    return (
      <AlertMessage
        variant="danger"
        message="An error occured when trying to fetch the API"
      />
    );
  }
  return (
    <Layout>
      <div className="overview__bg-image"></div>
      <Wrapper cssClass="overview__wrapper">
        <div className="overview__header">
          <Heading size="1">Establishment overview</Heading>
          <SearchForm />
        </div>
        <Container fluid>
          <Row className="gy-5">
            {product.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  name={item.name}
                  image={item.images[0].src}
                  category={item.categories[0].name}
                  price={item.prices.price}
                />
              );
            })}
            <ProductCard
              key="35"
              image={hotel3}
              name="Augustin Hotel"
              location="C.Sundts Gate 22"
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
