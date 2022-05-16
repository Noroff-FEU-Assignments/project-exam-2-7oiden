import ListGroup from "react-bootstrap/ListGroup";
import CustomerBlock from "../common/CustomerBlock";

function ReviewItem(props) {
  const { rating, review, customer, date, avatar } = props;
  //   console.log(avatar);
  return (
      <ListGroup.Item className="reviews__list-item">
        <CustomerBlock
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
