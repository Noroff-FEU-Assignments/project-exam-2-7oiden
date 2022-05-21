import { LocationIcon } from "../icons/MaterialIcons";

function LocationBlock({ address }) {
  return (
    <div className="info-block">
      <LocationIcon />
      <span
        className="info-block__text info-block__text--gray"
        // dangerouslySetInnerHTML={{ __html: address }}
      >
        {address}
      </span>
    </div>
  );
}
export default LocationBlock;
