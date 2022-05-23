import Carousel from "react-bootstrap/Carousel";
import Heading from "../common/Heading";
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
                review="Very good hotel near the city center. Friendly staff and very clean. Exceptional breakfast with a abundance of choice. The hotel was well-located for exploring the UNESCO World Heritage site of Bryggen and even for walking to other areas. I would absolutely recommend this hotel to those visiting Bergen."
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel__item">
            <div className="carousel__block-1">
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
            <div className="carousel__block-2">
              <CustomerBlock
                avatar={customer2}
                name="Kelly Johnson"
                date="2021-09-20T14:15:12"
                rating={5}
                review="My husband and I really enjoyed our stay at this hotel. The breakfast was beautiful with lots of options, staff were lovely and friendly, and the hotel and room were clean, modern and comfortable. The hotel is a short walk from various useful locations e.g. bus station, Bryggen, a shopping centre just opposite. Highly recommended!"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel__item">
            <div className="carousel__block-1">
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
            <div className="carousel__block-2">
              <CustomerBlock
                avatar={customer3}
                name="Rebecca Lee"
                date="2021-06-11T14:15:12"
                rating={5}
                review="Beautiful property in a perfect part of town. We alked everywhere and it's very close to the harbor. Staff is absolutely fabulous! They are friendly, helpful and made us feel very welcome. Great breakfast and a boxed breakfast when you are on the run... thanks! Comfortable sitting room with coffee and tea options. Will stay here again when we return."
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default CustomCarousel;
