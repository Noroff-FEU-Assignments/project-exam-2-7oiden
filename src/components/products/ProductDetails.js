import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
import axios from "axios";
import Loader from "../common/Loader";
import AlertMessage from "../common/AlertMessage";
import Heading from "../layout/Heading";
import RatingBlock from "../common/RatingBlock";
import LocationBlock from "../common/LocationBlock";
import BookingModal from "../modals/BookingModal";
import FacilitiesList from "./FacilitiesItem";
import LocationMap from "../layout/LocationMap";

export default function ProductDetails() {
  const [product, setproduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useNavigate();

  const { id } = useParams();

  console.log(id);
  // console.log(useLocation());

  if (!id) {
    history("/");
  }

  const detailsUrl = PRODUCTS_URL + "/" + id + CONSUMER_KEY + CONSUMER_SECRET;

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
          <img
            src={product.images[0].src}
            alt="placeholder"
            className="details__image"
          />
        </figure>
        <div className="details__block-1">
          <Heading size="1" cssClass="details-heading">
            {product.name}
          </Heading>
          <RatingBlock
            rating={product.average_rating}
            reviews={product.rating_count}
          />
          <LocationBlock location={product.attributes[0].options[0]} />
        </div>
        <div className="details__block-2">
          <div>
            <p className="details__price">{product.price} /night</p>
          </div>
          <BookingModal
            name={product.name}
            location={product.attributes[0].options[0]}
          />
        </div>
      </div>
      <div className="details__column-2">
        <div className="details-card">
          <div className="details-card__block">
            <Heading size="2" cssClass="details-card__heading">
              Facilities:
            </Heading>
            <ul className="details-card__list">
              {product.tags.map((item) => {
                return <FacilitiesList key={item.id} facility={item.name} />;
              })}
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
            <LocationMap address={product.attributes[0].options[0]} />
            {/* <iframe
              className="details-card__map"
              src={product.attributes[2].options[0]}
              title="address"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}
            <LocationBlock location={product.attributes[0].options[0]} />
          </div>
        </div>
      </div>
    </>
  );
}
