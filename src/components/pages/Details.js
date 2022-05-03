
import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Heading from "../layout/Heading";
import hotel1 from "../../images/hotel-1.jpg";
import DetailsCard from "../products/DetailsCard";
import BookingModal from "../modals/BookingModal";
import LocationBlock from "../common/LocationBlock";
import RatingBlock from "../common/RatingBlock";
import ProductDetails from "../products/ProductDetails";

function Details() {
  return (
    <Layout>
      <Wrapper cssClass="details__wrapper">
        {/* <div className="details__column-1">
          <figure className="details__image">
            <img src={hotel1} alt="placeholder" className="details__image" />
          </figure>
          <div className="details__block-1">
            <Heading size="1" cssClass="details-heading">
              Radisson Blu Royal
            </Heading>
            <RatingBlock rating="4.62" reviews="32" />
            <LocationBlock location="Dreggsallmenningen 1" />
          </div>
          <div className="details__block-2">
            <div>
              <p className="details__price">1500 NOK / night</p>
            </div>
            <BookingModal />
          </div>
        </div>
        <div className="details__column-2">
          <DetailsCard />
        </div> */}
        <ProductDetails />
      </Wrapper>
    </Layout>
  );
}
export default Details;
