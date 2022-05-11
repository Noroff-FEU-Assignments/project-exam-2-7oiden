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
import Form from "react-bootstrap/Form";
import SearchForm from "../forms/SearchForm";
import ProductCard from "../products/ProductCard";
import { filter } from "lodash";

function ProductsList() {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET;

  useEffect(function () {
    async function getproduct() {
      try {
        const response = await axios.get(url);
        console.log("response", response.data);
        setProduct(response.data);
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

  const handleChange = (option) => setCategory(option.target.value);

  console.log(category);

  const filterByCategory = filter(product, {
    categories: [{ slug: category }],
  });

  console.log(filterByCategory);

  let filteredProduct = [];

  if (filterByCategory.length === 0) {
    filteredProduct = product;
  } else {
    filteredProduct = filterByCategory;
  }

  return (
    <>
      <div className="overview__header">
          <Heading size="1">Establishment overview</Heading>
          <div>
            <Form.Label>Filter by category</Form.Label>
            <Form.Select
              aria-label="Filter by category"
              onChange={handleChange}
              className="category-filter"
              // value
            >
              <option value="all">All establishments</option>
              <option value="hotel">Hotels</option>
              <option value="bed-and-breakfast">Bed & Breakfast</option>
              <option value="apartment">Apartments</option>
            </Form.Select>
          </div>
      </div>

      <Container fluid>
        <div className="overview__search-wrapper">
          <SearchForm setQuery={setQuery} />
        </div>
        <Row className="gy-5">
          {filteredProduct
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
                location={item.sku}
                // beds={item.attributes[1].options[0]}
                beds={item.stock_quantity}
                image={item.images[0].src}
                category={item.categories[0].name}
                price={item.price}
                rating={item.average_rating}
                reviews={item.rating_count}
              />
            ))}
        </Row>
      </Container>
    </>
  );
}

export default ProductsList;
