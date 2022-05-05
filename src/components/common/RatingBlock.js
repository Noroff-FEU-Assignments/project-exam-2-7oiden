import StarIcon from "../icons/StarIcon";

function RatingBlock({rating, reviews}) {
  return (
    <div className="info-block">
      <StarIcon />
      <p className="info-block__text info-block__text--bold">{rating}</p>
      <p className="info-block__text">({reviews} reviews)</p>
    </div>
  );
}
export default RatingBlock