import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faMugSaucer,
  faUtensils,
  faWifi,
  faTv,
  faMartiniGlass,
  faSquareParking,
  faDog,
  faKitchenSet,
  faDumbbell,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";

function FacilitiesItem({ facility }) {
  let icon = facility.toLowerCase();

  switch (icon) {
    case "central":
      icon = faCity;
      break;
    case "free breakfast":
      icon = faMugSaucer;
      break;
    case "restaurant":
      icon = faUtensils;
      break;
    case "wifi":
      icon = faWifi;
      break;
    case "television":
      icon = faTv;
      break;
    case "bar":
      icon = faMartiniGlass;
      break;
    case "parking":
      icon = faSquareParking;
      break;
    case "pets allowed":
      icon = faDog;
      break;
    case "kitchen":
      icon = faKitchenSet;
      break;
    case "gym":
      icon = faDumbbell;
      break;
    default:
      icon = faCircleDot;
  }

  return (
    <li className="details-card__list-item">
      <FontAwesomeIcon icon={icon} className="facility-icon" />
      {facility}
    </li>
  );
}

export default FacilitiesItem;
