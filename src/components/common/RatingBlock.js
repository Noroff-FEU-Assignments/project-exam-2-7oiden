import { StarIcon } from "../icons/MaterialIcons";

function RatingBlock({ rating, reviews }) {
  return (
    <div className="info-block">
      <StarIcon color="#cc4a45" size="1.25rem" />
      <p className="info-block__text">
        {rating !== "0.00" ? rating : "No reviews yet"}
      </p>
      <p className="info-block__text">
        {rating !== "0.00" ? "(" + reviews + " reviews)" : ""}
      </p>
    </div>
  );
}
export default RatingBlock;
