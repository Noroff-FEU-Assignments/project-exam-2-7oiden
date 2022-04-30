import StarIcon from "../icons/StarIcon";

function RatingBlock({rating, reviews}) {
  return (
    <div className="rating-block">
      <StarIcon />
      <p className="rating-block__text rating-block__text--rating">{rating}</p>
      <p className="rating-block__text">({reviews} reviews)</p>
    </div>
  );
}
export default RatingBlock