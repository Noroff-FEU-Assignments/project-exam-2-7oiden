import moment from "moment";
import { StarIcon } from "../icons/MaterialIcons";

function CustomerBlock({ cssClass, avatar, name, date, rating, review }) {
  const formattedDate = moment(date).format("MMMM Do YYYY");

  return (
    <div className={`customer ${cssClass}`}>
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
      {[...Array(rating)].map((o, i) => (
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
