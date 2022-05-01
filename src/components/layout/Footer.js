import Wrapper from "./Wrapper";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from "../icons/SocialMediaIcons";
import Copyright from "./Copyright";

function Footer() {
  return (
    <footer className="footer">
      <Wrapper cssClass="footer-wrapper">
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
                <a href="/about" className="footer__link">
                  About us
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <p className="footer__heading">Support</p>
            <ul className="footer__list">
              <li>
                <a href="/support" className="footer__link">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/support" className="footer__link">
                  Contact form
                </a>
              </li>
            </ul>
          </div>
          <div className="footer__block">
            <p className="footer__heading">Legal</p>
            <ul className="footer__list">
              <li>
                <a href="/" className="footer__link">
                  Terms
                </a>
              </li>
              <li>
                <a href="/" className="footer__link">
                  Privacy
                </a>
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
