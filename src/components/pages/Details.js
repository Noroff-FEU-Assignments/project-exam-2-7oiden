import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Heading from "../layout/Heading";
import StarIcon from "../icons/StarIcon";
import LocationIcon from "../icons/LocationIcon";
import hotel1 from "../../images/hotel-1.jpg";
import Button from "react-bootstrap/Button";
import DetailsCard from "../products/DetailsCard";

function Details() {
  return (
    <Layout>
      <Wrapper cssClass="details-wrapper">
        <div className="details__column-1">
          <figure className="details__image">
            <img src={hotel1} alt="placeholder" className="details__image" />
          </figure>
          <div className="details__block-1">
            <Heading size="1" cssClass="details-heading">
              Radisson Blu Royal
            </Heading>
            <div className="product-card__content-box">
              <StarIcon />
              <p className="product-card__text product-card__text--rating">
                4.75
              </p>
              <p className="product-card__text">(32 reviews)</p>
            </div>
            <div className="product-card__content-box">
              <LocationIcon />
              <p className="product-card__text product-card__text--location">
                Dreggsallmenningen 1
              </p>
            </div>
          </div>
          <div className="details__block-2">
            <div>
              <p className="details__price">1500 NOK / night</p>
            </div>
            <Button className="primary-button">Book now</Button>
          </div>
        </div>
        <div className="details__column-2">
          <DetailsCard />
        </div>
      </Wrapper>
    </Layout>
  );
}
export default Details;
