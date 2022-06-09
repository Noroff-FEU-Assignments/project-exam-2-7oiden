import Wrapper from "../layout/Wrapper";
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
} from "../icons/SocialMediaIcons";
import CopyrightBlock from "../common/CopyrightBlock";
import FooterBlock from "../common/FooterBlock";
import FooterListItem from "../common/FooterListItem";

function Footer() {
  return (
    <footer className="footer">
      <Wrapper cssClass="footer__wrapper">
        <div className="footer__container">
          <FooterBlock heading="Follow us on">
            <div className="footer__icon-list">
              <li className="footer__icon">
                  <InstagramIcon />
              </li>
              <li className="footer__icon">
                <FacebookIcon />
              </li>
              <li className="footer__icon">
                <TwitterIcon />
              </li>
            </div>
          </FooterBlock>
          <FooterBlock heading="About">
            <FooterListItem link="/about" title="About" disabled="" />
          </FooterBlock>
          <FooterBlock heading="Support">
            <FooterListItem link="/support" title="FAQ" disabled="" />
            <FooterListItem link="/support" title="Contact" disabled="" />
          </FooterBlock>
          <FooterBlock heading="Legal">
            <FooterListItem link="/" title="Terms" disabled="disabled" />
            <FooterListItem link="/" title="Privacy" disabled="disabled" />
          </FooterBlock>
        </div>
      </Wrapper>
      <CopyrightBlock />
    </footer>
  );
}
export default Footer;
