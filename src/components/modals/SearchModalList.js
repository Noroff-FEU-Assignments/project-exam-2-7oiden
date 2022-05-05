import { useState, useEffect } from "react";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import AlertMessage from "../common/AlertMessage";
import SearchForm from "../forms/SearchForm";
import ListGroup from "react-bootstrap/ListGroup";
import LocationIcon from "../icons/LocationIcon";

export default function SearchModalList() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("");

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET;

  // const navigate = useNavigate();

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
      <ListGroup className="search-list" variant="flush">
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
              <ListGroup.Item>
                <div className="list-item-wrapper">
                  <LocationIcon />
                  <span className="list-item-name">{item.name}</span>
                  <div className="list-item-category">—</div>
                  <span className="list-item-category">
                    {item.categories[0].name.toLowerCase()}
                  </span>
                </div>
              </ListGroup.Item>
            </Link>
          ))}
      </ListGroup>
    </>
  );
}
