import { useState, useEffect } from "react";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Heading from "../layout/Heading";
import SearchForm from "../forms/SearchForm";
import ProductCard from "../products/ProductCard";

function ProductsList() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

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
    <>
      <div className="overview__header">
        <Heading size="1">Establishment overview</Heading>
        <SearchForm setQuery={setQuery} />
      </div>
      <Container fluid>
        <Row className="gy-5">
          {product
            // eslint-disable-next-line array-callback-return
            .filter((item) => {
              if (query === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.name.toLowerCase().startsWith(query.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                location={item.attributes[0].options[0]}
                image={item.images[0].src}
                category={item.categories[0].name}
                price={item.price}
                rating={item.average_rating}
                reviews={item.rating_count}
              />
            ))}
          {/* {product.map((item) => {
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                name={item.name}
                location={item.attributes[0].options[0]}
                image={item.images[0].src}
                category={item.categories[0].name}
                price={item.price}
                rating={item.average_rating}
                reviews={item.rating_count}
              />
            );
          })} */}
        </Row>
      </Container>
    </>
  );
}

export default ProductsList;
