import Heading from "./Heading";
import ButtonLink from "../common/ButtonLink";
import Wrapper from "./Wrapper";

function Hero() {
  return (
    <div className="hero">
      <Wrapper cssClass="hero-wrapper">
        <hgroup>
          <Heading size="1" cssClass="hero__heading">
            Let <em>us</em> take care of your stay in <strong>Bergen.</strong>
          </Heading>
          <div className="hero__sub-heading-container">
          <div className="hero__dot"></div>
            <Heading size="2" cssClass="hero__sub-heading">
              Easy, Conventient & Reliable
            </Heading>
          </div>
        </hgroup>
        <ButtonLink cssClass="btn-primary hero__button" linkTo="/overview">Browse all</ButtonLink>
      </Wrapper>
    </div>
  );
}
export default Hero;
