import { BedIcon } from "../icons/MaterialIcons";

function BedsBlock({ beds }) {
  return (
    <div className="info-block">
      <BedIcon />
      <p className="info-block__text info-block__text--green info-block__text--bold">
        {beds}
      </p>
      <p className="info-block__text info-block__text--green info-block__text--bold">
        bed(s)
      </p>
    </div>
  );
}
export default BedsBlock;
