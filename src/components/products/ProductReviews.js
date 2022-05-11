import { useState, useEffect } from "react";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import { filter } from "lodash";
import ReviewItem from "./ReviewItem";
import ListGroup from "react-bootstrap/ListGroup";

export default function ProductReviews({ id }) {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reviewsUrl = PRODUCTS_URL + "/reviews" + CONSUMER_KEY + CONSUMER_SECRET;

  const revId = parseInt(id);

//   console.log(revId);

  useEffect(
    function () {
      async function getReviews() {
        try {
          const response = await axios.get(reviewsUrl);
          console.log("response:", response.data);
          setReview(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getReviews();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  if (loading) return <Loader />;

  if (error)
    return (
      <AlertMessage
        variant="danger"
        message="An error occured when trying to fetch the page"
      />
    );

  //   console.log(review);

  const filteredReviews = filter(review, { product_id: revId });

//   console.log(filteredReviews);

  return (
    <ListGroup>
        {filteredReviews.map((item) => (
          <ReviewItem
            key={item.id}
            rating={item.rating}
            review={item.review}
            customer={item.reviewer}
            date={item.date_created}
            avatar={item.reviewer_avatar_urls[48]}
          />
        ))}
    </ListGroup>
  );
}
