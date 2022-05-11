import ListGroup from "react-bootstrap/ListGroup";

function ReviewItem(props) {
  const { rating, review, customer, date, avatar } = props;
  console.log(avatar);
  return <ListGroup.Item className="reviews__list-item">{customer}{review}</ListGroup.Item>;
}
export default ReviewItem;
