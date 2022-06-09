import { Link } from "react-router-dom";

function FooterListItem({ link, title, disabled }) {
  return (
    <li>
      <Link to={link} className={`footer__link ${disabled}`}>
        {title}
      </Link>
    </li>
  );
}
export default FooterListItem;
