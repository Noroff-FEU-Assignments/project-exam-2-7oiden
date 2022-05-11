import StarIcon from "../icons/StarIcon";
import moment from "moment";
import RatingBlock from "./RatingBlock";
// import customer1 from "../../images/customer-1.jpg";

function CustomerBlock({ avatar, name, date, stars, rating, review }) {
  const formattedDate = moment(date).format("MMMM YYYY");

  console.log(rating);

  return (
    <div className="customer">
      <div className="customer__header">
        <img src={avatar} alt="profile" className="customer__image"></img>
        <div>
          <p className="customer__name">{name}</p>
          <p className="customer__date">{formattedDate}</p>
        </div>
      </div>
      <StarIcon />
      <p
        className="customer__comment"
        dangerouslySetInnerHTML={{ __html: review }}
      ></p>
    </div>
  );
}
export default CustomerBlock;
