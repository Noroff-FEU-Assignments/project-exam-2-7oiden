import { StarIcon } from "../icons/MaterialIcons";
import moment from "moment";

function CustomerBlock({ avatar, name, date, rating, review }) {
  const formattedDate = moment(date).format("MMMM Do YYYY");

  // console.log(rating);

  return (
    <div className="customer">
      <div className="customer__header">
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="customer__image"
        ></img>
        <div>
          <p className="customer__name">{name}</p>
          <p className="customer__date">{formattedDate}</p>
        </div>
      </div>
      {[...Array(rating)].map((x, i) => (
        <StarIcon key={i} color="#cc4a45" size="1.25rem" />
      ))}
      <p
        className="customer__comment"
        dangerouslySetInnerHTML={{ __html: review }}
      ></p>
    </div>
  );
}
export default CustomerBlock;
