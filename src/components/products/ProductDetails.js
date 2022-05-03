import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { PRODUCTS_URL } from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Heading from "../layout/Heading";
import RatingBlock from "../common/RatingBlock";
import LocationBlock from "../common/LocationBlock";
import BookingModal from "../modals/BookingModal";

export default function ProductDetails() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  if (!id) {
    history("/");
  }

  const detailsUrl = PRODUCTS_URL + "/" + id;

  useEffect(
    function () {
      async function getDetails() {
        try {
          const response = await axios.get(detailsUrl);
          console.log("response:", response.data);
          setproduct(response.data);
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

  return (
    <>
      <div className="details__column-1">
        <figure className="details__image">
          <img src={product.images[0].src} alt="placeholder" className="details__image" />
        </figure>
        <div className="details__block-1">
          <Heading size="1" cssClass="details-heading">
            {product.name}
          </Heading>
          <RatingBlock rating={product.average_rating} reviews={product.review_count} />
          <LocationBlock location={product.sku} />
        </div>
        <div className="details__block-2">
          <div>
            <p className="details__price">{product.prices.price} /night</p>
          </div>
          <BookingModal />
        </div>
      </div>
      <div className="details__column-2">
        <div className="details-card">
          <div className="details-card__block">
            <Heading size="2" cssClass="details-card__heading">
              Facilities:
            </Heading>
            <ul className="details-card__list">
              <li>WIFI</li>
              <li>Television</li>
              <li>Parking</li>
              <li>Central</li>
              <li>Free breakfast</li>
              <li>Refridgerator</li>
              <li>Bar</li>
              <li>Pets allowed</li>
            </ul>
          </div>
          <div className="details-card__block">
            <Heading size="2" cssClass="details-card__heading">
              Description:
            </Heading>
            <p
              className="details-card__text"
              dangerouslySetInnerHTML={{ __html: product.description }}
            ></p>
          </div>
          <div className="details-card__block">
            <Heading size="2" cssClass="details-card__heading">
              Location:
            </Heading>
            <iframe
              className="details-card__map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.8678772197686!2d5.320126316257603!3d60.39786003193164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463cfc1d9b94f045%3A0x837f6fb8975ce764!2sDreggsallmenningen%201%2C%205003%20Bergen!5e0!3m2!1sen!2sno!4v1651259885994!5m2!1sen!2sno"
              title="address"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <LocationBlock location={product.sku} />
          </div>
        </div>
      </div>
    </>
  );
}
