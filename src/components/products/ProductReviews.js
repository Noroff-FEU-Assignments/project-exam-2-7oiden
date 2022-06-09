import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
  REVIEWS_RETURNED,
} from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import { filter } from "lodash";
import ListGroup from "react-bootstrap/ListGroup";
import ReviewItem from "./ReviewItem";
import reviewAvatar from "../../images/review-avatar.jpg";

export default function ProductReviews({ id }) {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reviewsUrl =
    PRODUCTS_URL +
    "/reviews" +
    CONSUMER_KEY +
    CONSUMER_SECRET +
    REVIEWS_RETURNED;

  const location = useLocation().key;

  const revId = parseInt(id);

  useEffect(
    function () {
      async function getReviews() {
        try {
          const response = await axios.get(reviewsUrl);
          // console.log("response:", response.data);
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
    [location]
  );

  if (loading) return <Loader />;

  if (error)
    return (
      <AlertMessage
        variant="danger"
        message="An error occured when trying to fetch the page"
      />
    );

  const filteredReviews = filter(review, { product_id: revId });

  return (
    <ListGroup className="reviews__list-group">
      {filteredReviews.map((item) => (
        <ReviewItem
          key={item.id}
          rating={item.rating}
          review={item.review}
          customer={item.reviewer}
          date={item.date_created}
          avatar={reviewAvatar}
          //Chrome won't accept WP avatar, works fine on mobile and Firefox
          // avatar={item.reviewer_avatar_urls[48]}
        />
      ))}
    </ListGroup>
  );
}
