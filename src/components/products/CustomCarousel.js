import Carousel from "react-bootstrap/Carousel";
import Heading from "../layout/Heading";
import hotel1 from "../../images/hotel-1.jpg";
import hotel2 from "../../images/hotel-2.jpg";
import hotel3 from "../../images/hotel-3.jpg";
import customer1 from "../../images/customer-1.jpg";
import customer2 from "../../images/customer-2.jpg";
import customer3 from "../../images/customer-3.jpg";
import StarIcon from "../icons/StarIcon";

function CustomCarousel() {
  return (
    <div className="carousel-container">
      <Heading size="5" cssClass="carousel__heading">
        Customer recommandations
      </Heading>
      <Carousel interval="99999999">
        <Carousel.Item>
          <div className="carousel__item">
            <div>
              <Heading size="6" cssClass="carousel__title">
                Radisson Blu Royal
              </Heading>
              <img
                className="d-block carousel__image"
                src={hotel1}
                alt="First slide"
              />
            </div>
            <div className="customer">
              <div className="customer__header">
                <img
                  src={customer1}
                  alt="profile"
                  className="customer__image"
                ></img>
                <div>
                  <p className="customer__name">Joyce Russell</p>
                  <p className="customer__date">May 2021</p>
                </div>
              </div>
              <div className="customer__icons">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <p className="customer__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel__item">
            <div>
              <Heading size="6" cssClass="carousel__title">
                Scandic Ørnen
              </Heading>
              <img
                className="d-block carousel__image"
                src={hotel2}
                alt="First slide"
              />
            </div>
            <div className="customer">
              <div className="customer__header">
                <img
                  src={customer2}
                  alt="profile"
                  className="customer__image"
                ></img>
                <div>
                  <p className="customer__name">Kelly Johnson</p>
                  <p className="customer__date">June 2021</p>
                </div>
              </div>
              <div className="customer__icons">
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
              </div>
              <p className="customer__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel__item">
            <div>
              <Heading size="6" cssClass="carousel__title">
                Augustin Hotel
              </Heading>
              <img
                className="d-block carousel__image"
                src={hotel3}
                alt="First slide"
              />
            </div>
            <div className="customer">
              <div className="customer__header">
                <img
                  src={customer3}
                  alt="profile"
                  className="customer__image"
                ></img>
                <div>
                  <p className="customer__name">Rebecca Lee</p>
                  <p className="customer__date">April 2022</p>
                </div>
              </div>
              <div className="customer__icons">
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
                <svg viewBox="0 0 24 24" className="customer__star-icon">
                  <path
                    fill="currentColor"
                    d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                  />
                </svg>
              </div>
              <p className="customer__comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CustomCarousel;
