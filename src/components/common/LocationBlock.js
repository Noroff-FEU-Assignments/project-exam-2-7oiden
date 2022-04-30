import LocationIcon from "../icons/LocationIcon";

function LocationBlock({location}) {
  return (
    <div className="location-block">
      <LocationIcon />
      <p className="location-block__text">
        {location}
      </p>
    </div>
  );
}
export default LocationBlock