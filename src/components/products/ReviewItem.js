import ListGroup from "react-bootstrap/ListGroup";
import CustomerBlock from "../common/CustomerBlock";

function ReviewItem(props) {
  const { rating, review, customer, date, avatar } = props;
 
  return (
    <ListGroup.Item className="reviews__list-item">
      <CustomerBlock
        cssClass="customer-reviews"
        rating={rating}
        avatar={avatar}
        name={customer}
        date={date}
        review={review}
      />
    </ListGroup.Item>
  );
}
export default ReviewItem;
