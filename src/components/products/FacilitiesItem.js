import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

// let icon = "";


function FacilitiesItem({ facility }) {

//   if (facility.toLowerCase() === "central") {
//     icon = faCity 
//     } else {
//       icon = faMugSaucer
//     }

//     console.log(facility.toLowerCase)

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
      default:
      icon = faCity;  
  }  

  return (
    <li className={facility.toLowerCase()}>
      <FontAwesomeIcon icon={icon} />
      {facility}
    </li>
  );
}

export default FacilitiesItem;
