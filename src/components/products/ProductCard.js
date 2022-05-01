import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import StarIcon from "../icons/StarIcon";
import LocationBlock from "../common/LocationBlock";
import RatingBlock from "../common/RatingBlock";

function ProductCard(props) {
  const { image, name, location, rating, reviews, category, price } = props;

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
            <RatingBlock rating={rating} reviews={reviews} />
            <LocationBlock location={location}/>
          </Card.Body>
          <div className="product-card__bottom">{price} NOK</div>
        </Link>
      </Card>
    </Col>
  );
}
export default ProductCard;