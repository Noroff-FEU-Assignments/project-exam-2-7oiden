import { Link } from "react-router-dom";

function ButtonLink({ cssClass, linkTo, children }) {
  return (
    <Link to={linkTo} className={cssClass}>
      {children}
    </Link>
  );
}
export default ButtonLink;
