import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import hotels from "./hotels.jpg"

function CategoryCard(props) {
  const { title, image, id } = props;
  return (
      
        <Card className="category-card">
        <Link to={`detail/${id}`} className="card-link" style={{ textDecoration: 'none' }}>
          <Card.Img
            variant="top"
            src={image}
            className="category-card__image"
          />
          <Card.Body className="category-card__body">
            <Card.Title as="h3" className="category-card__title">
              {title}
            </Card.Title>
          </Card.Body>
          </Link>
        </Card>
      
  );
}
export default CategoryCard;
