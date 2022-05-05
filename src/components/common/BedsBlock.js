import BedIcon from "../icons/BedIcon";

function BedsBlock({ beds }) {
  return (
    <div className="info-block">
      <BedIcon />
      <p className="info-block__text info-block__text--bold">{beds}</p>
      <p className="info-block__text">bed(s)</p>
    </div>
  );
}
export default BedsBlock;
