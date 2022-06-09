import { carouselArray } from "../../constants/carouselArray";
import { Link } from "react-router-dom";
import Heading from "../common/Heading";
import Carousel from "react-bootstrap/Carousel";
import CustomerBlock from "../common/CustomerBlock";

function CustomCarousel() {
  return (
    <div className="carousel__container">
      <Heading size="5" cssClass="carousel__heading">
        Customer recommandations
      </Heading>
      <Carousel interval="5000">
        {carouselArray.map((item) => (
          <Carousel.Item key={item.title}>
            <div className="carousel__item">
              <div className="carousel__block-1">
                <Link key={item.title} to={item.link}>
                  <Heading size="6" cssClass="carousel__title">
                    {item.title}
                  </Heading>
                  <img
                    className="d-block carousel__image"
                    src={item.est_image}
                    alt={item.est_alt_text}
                  />
                </Link>
              </div>
              <div className="carousel__block-2">
                <CustomerBlock
                  cssClass="customer-carousel"
                  avatar={item.avatar}
                  name={item.name}
                  date={item.date}
                  rating={item.rating}
                  review={item.review}
                />
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
