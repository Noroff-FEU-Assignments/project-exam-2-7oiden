import { useState, useEffect } from "react";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import AlertMessage from "../common/AlertMessage";
import SearchForm from "../forms/SearchForm";

export default function SearchModalList() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
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
        // setError(error.toString());
      } finally {
        setLoading(false);
      }
    }

    getproduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  let resultMessage = "";

  // if (error) {
  //   return (
  //     <AlertMessage
  //       variant="danger"
  //       message="An error occured when trying to fetch the API"
  //     />
  //   );
  // }

  return (
    <>
      <SearchForm setQuery={setQuery} loading={loading} />
      <ul className="search-list">
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
            <li key={item.id}>
              <Link to={`/details/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        <div>{loading ? "Please wait..." : ""}</div>
        <div>{!product.name ? "No result" : ""}</div>
      </ul>
    </>
  );
}
