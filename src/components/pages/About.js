import Layout from "../layout/Layout";
import Heading from "../layout/Heading";
import Wrapper from "../layout/Wrapper";
import ceo from "../../images/ceo.jpg";
import { QuoteIcon } from "../icons/MaterialIcons";

function About() {
  return (
    <Layout>
      <Wrapper cssClass="about__wrapper">
        <div className="about__container">
          <div className="about__bg-image">
            <div className="slogan about__slogan">Easy, Convenient & Reliable</div>
          </div>
          <section className="about__card">
            <Heading size="1" cssClass="about__heading">
              About Holidaze
            </Heading>
            <p className="about__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p className="about__text">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <div className="about-card">
              <img
                src={ceo}
                alt="Holidaze employee"
                className="about-card__image"
              />
              <div className="about-card__body">
                <div className="about-card__quote">
                  <QuoteIcon />
                  <p className="about-card__quote-text">
                    You are important to us
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </Layout>
  );
}
export default About;
