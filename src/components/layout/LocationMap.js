import { MAP_URL, MAP_API_KEY } from "../../constants/api";

function LocationMap({ address }) {
  const url = MAP_URL + MAP_API_KEY + "&q=" + address + ",Bergen+Norway";

  return (
    <iframe
      className="details-card__map"
      src={url}
      title="address"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
export default LocationMap;
