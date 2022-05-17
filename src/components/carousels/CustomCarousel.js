import Carousel from "react-bootstrap/Carousel";
import Heading from "../layout/Heading";
import hotel1 from "../../images/hotel-1.jpg";
import hotel2 from "../../images/hotel-2.jpg";
import hotel3 from "../../images/hotel-3.jpg";
import customer1 from "../../images/customer-1.jpg";
import customer2 from "../../images/customer-2.jpg";
import customer3 from "../../images/customer-3.jpg";
// import StarIcon from "../icons/StarIcon";
import CustomerBlock from "../common/CustomerBlock";
import { Link } from "react-router-dom";

function CustomCarousel() {
  return (
    <div className="carousel__container">
      <Heading size="5" cssClass="carousel__heading">
        Customer recommandations
      </Heading>
      <Carousel interval="99999999">
          <Carousel.Item>
            <div className="carousel__item">
              <div className="carousel__block-1">
                <Link to="/details/333">
                  <Heading size="6" cssClass="carousel__title">
                    Radisson Blu Royal
                  </Heading>
                  <img
                    className="d-block carousel__image"
                    src={hotel1}
                    alt="Interior of Radisson Blu Royal hotel room"
                  />
                </Link>
              </div>
              <div className="carousel__block-2">
                <CustomerBlock
                  avatar={customer1}
                  name="Joyce Russell"
                  date="2022-05-04T14:15:12"
                  rating={5}
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel__item">
              <div>
                <Link to="/details/338">
                  <Heading size="6" cssClass="carousel__title">
                    Scandic Ørnen
                  </Heading>

                  <img
                    className="d-block carousel__image"
                    src={hotel2}
                    alt="Interior of Scandic Ørnen hotel room"
                  />
                </Link>
              </div>
              <div className="carousel__customer-container">
                <CustomerBlock
                  avatar={customer2}
                  name="Kelly Johnson"
                  date="2021-09-20T14:15:12"
                  rating={5}
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel__item">
              <div>
                <Link to="/details/340">
                  <Heading size="6" cssClass="carousel__title">
                    Augustin Hotel
                  </Heading>

                  <img
                    className="d-block carousel__image"
                    src={hotel3}
                    alt="Interior of Augustin Hotel hotel room"
                  />
                </Link>
              </div>
              <div className="carousel__customer-container">
                <CustomerBlock
                  avatar={customer3}
                  name="Rebecca Lee"
                  date="2021-06-11T14:15:12"
                  rating={5}
                  review="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
                />
              </div>
            </div>
          </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CustomCarousel;
