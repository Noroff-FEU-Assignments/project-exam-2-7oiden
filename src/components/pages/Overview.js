import { useState, useEffect } from "react";
import { PRODUCTS_URL, CONSUMER_KEY, CONSUMER_SECRET } from "../../constants/api";
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

function Overview() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET;

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
                  id={item.id}
                  name={item.name}
                  location={item.sku}
                  image={item.images[0].src}
                  category={item.categories[0].name}
                  price={item.price}
                  rating={item.average_rating}
                  reviews={item.rating_count}
                />
              );
            })}
          </Row>
        </Container>
      </Wrapper>
    </Layout>
  );
}
export default Overview;
