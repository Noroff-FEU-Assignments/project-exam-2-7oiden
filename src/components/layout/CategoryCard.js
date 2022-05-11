import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";


function CategoryCard(props) {
  const { title, image, category } = props;
  return (
      
        <Card className="category-card">
        <Link to={`overview`} className="card-link" style={{ textDecoration: 'none' }}>
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
