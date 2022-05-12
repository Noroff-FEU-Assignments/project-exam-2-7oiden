import StarIcon from "../icons/StarIcon";
import moment from "moment";


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
      {[...Array(rating)].map((x, i) => (
        <StarIcon key={i} />
      ))}
      <p
        className="customer__comment"
        dangerouslySetInnerHTML={{ __html: review }}
      ></p>
    </div>
  );
}
export default CustomerBlock;
