import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Wrapper from "../layout/Wrapper";
import Heading from "../common/Heading";
import BedsBlock from "../common/BedsBlock";
import RatingBlock from "../common/RatingBlock";
import LocationBlock from "../common/LocationBlock";
import BookingModal from "../modals/BookingModal";
import FacilitiesIcons from "../icons/FacilitiesIcons";
import LocationMap from "../layout/LocationMap";
import Collapse from "react-bootstrap/Collapse";
import { HideButton, ShowButton } from "../buttons/DescriptionToggler";
import ProductReviews from "./ProductReviews";
import ReviewForm from "../forms/ReviewForm";

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [show, setShow] = useState(true);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history("/");
  }

  const detailsUrl = PRODUCTS_URL + "/" + id + CONSUMER_KEY + CONSUMER_SECRET;

  const location = useLocation().key;

  useEffect(
    function () {
      async function getDetails() {
        try {
          const response = await axios.get(detailsUrl);
          // console.log("response:", response.data);
          setProduct(response.data);
        } catch (error) {
          console.log(error);
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getDetails();
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

  return (
    <>
      <Wrapper cssClass="details__wrapper">
        <section className="details__column-1">
          <figure className="details__image">
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className="details__image"
            />
          </figure>
          <div className="details__block-1">
            <Heading size="1" cssClass="details__heading">
              {product.name}
            </Heading>
            <div className="details__info-wrapper">
              <p className="details__category">{product.categories[0].name}</p>
              <div className="info-block__text--green">—</div>
              <BedsBlock beds={product.stock_quantity} />
            </div>
            <RatingBlock
              rating={product.average_rating}
              reviews={product.rating_count}
            />
          </div>
          <div className="details__block-2">
            <div>
              <p className="details__price" aria-label="Price per night">{product.price} NOK/night</p>
            </div>
            <BookingModal name={product.name} address={product.sku} />
          </div>
        </section>
        <section className="details__column-2">
          <div className="details-card">
            <div className="details-card__block">
              <Heading size="2" cssClass="details-card__heading">
                Facilities:
              </Heading>
              {product.tags.length === 0 ? (
                <span className="details-card__text">
                  Facilities is not specified, please contact support.
                </span>
              ) : (
                <span></span>
              )}
              <ul className="details-card__list">
                {product.tags.map((item) => {
                  return <FacilitiesIcons key={item.id} facility={item.name} />;
                })}
              </ul>
            </div>
            <div className="details-card__block">
              <Heading size="2" cssClass="details-card__heading">
                Description:
              </Heading>
              <button
                onClick={() => setShow(!show)}
                aria-controls="example-fade-text"
                aria-expanded={show}
                aria-label="show-hide text"
                className="show-hide__icon-box"
              >
                {show ? <HideButton /> : <ShowButton />}
              </button>
              <Collapse in={show}>
                <div
                  id="example-collapse-text"
                  className="details-card__text"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></div>
              </Collapse>
            </div>
            <div className="details-card__block">
              <Heading size="2" cssClass="details-card__heading">
                Location:
              </Heading>
              <LocationMap address={product.sku} />
              <LocationBlock address={product.sku} />
            </div>
          </div>
        </section>
      </Wrapper>
      <Wrapper cssClass="reviews__wrapper">
        <section className="reviews">
          <Heading size="3" cssClass="reviews__heading">
            Reviews
          </Heading>
          <RatingBlock
            rating={product.average_rating}
            reviews={product.rating_count}
          />
          <ProductReviews id={id} cssClass="details-review__heading" />
        </section>
        <ReviewForm id={id} />
      </Wrapper>
    </>
  );
}
