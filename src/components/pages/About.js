import Layout from "../layout/Layout";
import Heading from "../layout/Heading";
import Wrapper from "../layout/Wrapper";
import ceo from "../../images/ceo.jpg";

function About() {
  return (
    <Layout>
      <div className="about-outer-wrapper">
        <div className="about__bg-image">
          <Heading size="2" cssClass="about__slogan">
            Easy, Convenient & Reliable
          </Heading>
        </div>
        <Wrapper cssClass="about-wrapper">
          <div className="about__container">
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
            <div className="ceo-card">
              <img
                src={ceo}
                alt="Holidaze CEO profile"
                className="ceo-card__image"
              />
              <div className="ceo-card__body">
                <div className="ceo-card__quote">
                  <svg viewBox="0 0 24 24" className="ceo-card__quote-symbol">
                    <path
                      fill="currentColor"
                      d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"
                    />
                  </svg>
                  <p className="ceo-card__quote-text">We are her for you</p>
                </div>
                {/* <p className="ceo-card__signature">Anna Birkeland - CEO</p> */}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </Layout>
  );
}
export default About;
