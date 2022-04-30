import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import StarIcon from "../icons/StarIcon";
import LocationIcon from "../icons/LocationIcon";

function ProductCard(props) {
  const { image, name, address, rating, reviews, category, price } = props;

  return (
    <Col>
      <Card style={{ width: "20rem" }} className="product-card">
        <Link to="/details" className="card-link" style={{ textDecoration: "none" }}>
          <Card.Img variant="top" src={image} className="product-card__image" />
          <Card.Body className="product-card__body">
            <Card.Title as="h2" className="product-card__title">
              {name}
            </Card.Title>
            <Card.Text className="product-card__text product-card__text--category">
              {category}
            </Card.Text>
            <hr />
            <div className="product-card__content-box">
              <StarIcon />
              <p className="product-card__text product-card__text--rating">
                {rating}
              </p>
              <p className="product-card__text">({reviews} reviews)</p>
            </div>
            <div className="product-card__content-box">
              <LocationIcon />
              <p className="product-card__text product-card__text--location">
                {address}
              </p>
            </div>
          </Card.Body>
          <div className="product-card__bottom">{price} NOK</div>
        </Link>
      </Card>
    </Col>
  );
}
export default ProductCard;
