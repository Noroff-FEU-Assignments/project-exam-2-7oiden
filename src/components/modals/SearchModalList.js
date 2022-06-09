import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ITEMS_RETURNED,
} from "../../constants/api";
import axios from "axios";
import AlertMessage from "../common/AlertMessage";
import SearchForm from "../forms/SearchForm";
import ListGroup from "react-bootstrap/ListGroup";
import { LocationIcon } from "../icons/MaterialIcons";

export default function SearchModalList() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET + ITEMS_RETURNED;

  useEffect(function () {
    async function getproduct() {
      try {
        const response = await axios.get(url);
        // console.log("response", response.data);
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
      <SearchForm setQuery={setQuery} loading={loading} />
      <ListGroup className="search-modal__list-group" variant="flush">
        {product
          // eslint-disable-next-line array-callback-return
          .filter((item) => {
            if (query === "") {
              return "";
            } else if (
              item.name.toLowerCase().includes(query.toLowerCase()) ||
              item.name.toLowerCase().startsWith(query.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item) => (
            <Link
              to={`/details/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <ListGroup.Item className="search-modal__list-item">
                <div className="search-modal__list-wrapper">
                  <LocationIcon color="#053d4f" size="1.25rem" />
                  <span className="search-modal__list-item-name">
                    {item.name}
                  </span>
                </div>
              </ListGroup.Item>
            </Link>
          ))}
      </ListGroup>
    </>
  );
}
