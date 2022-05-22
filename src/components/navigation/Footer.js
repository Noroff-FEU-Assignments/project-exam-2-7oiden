import Wrapper from "../layout/Wrapper";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from "../icons/SocialMediaIcons";
import Copyright from "../layout/Copyright";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Wrapper cssClass="footer__wrapper">
        <div className="footer__container">
          <div className="footer__block">
            <p className="footer__heading">Follow us on</p>
            <ul className="footer__icon-list">
              <li className="footer__icon">
                <InstagramIcon />
              </li>
              <li className="footer__icon">
                <FacebookIcon />
              </li>
              <li className="footer__icon">
                <TwitterIcon />
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <p className="footer__heading">About</p>
            <ul className="footer__list">
              <li>
                <Link to="/about" className="footer__link">
                  About us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <p className="footer__heading">Support</p>
            <ul className="footer__list">
              <li>
                <Link to="/support" className="footer__link">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="footer__link">
                  Contact form
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <p className="footer__heading">Legal</p>
            <ul className="footer__list">
              <li>
                <Link to="/" className="footer__link">
                  Terms
                </Link>
              </li>
              <li>
                <Link to="/" className="footer__link">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
      <Copyright />
    </footer>
  );
}
export default Footer;
