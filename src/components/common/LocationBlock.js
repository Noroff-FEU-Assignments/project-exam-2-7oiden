import { LocationIcon } from "../icons/MaterialIcons";

function LocationBlock({ location }) {
  return (
    <div className="info-block">
      <LocationIcon />
      <span
        className="info-block__text info-block__text--gray"
        dangerouslySetInnerHTML={{ __html: location }}
      ></span>
    </div>
  );
}
export default LocationBlock;
