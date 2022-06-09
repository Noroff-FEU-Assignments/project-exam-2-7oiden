import { LocationIcon } from "../icons/MaterialIcons";

function LocationBlock({ address }) {
  return (
    <div className="info-block">
      <LocationIcon color="#707070" size="1.25rem" />
      <span className="info-block__text info-block__text--gray">{address}</span>
    </div>
  );
}
export default LocationBlock;
