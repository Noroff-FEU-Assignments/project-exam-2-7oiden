import LocationIcon from "../icons/LocationIcon";

function LocationBlock({location}) {
  return (
    <div className="info-block">
      <LocationIcon />
      <p className="info-block__text info-block__text--gray">{location}</p>
    </div>
  );
}
export default LocationBlock