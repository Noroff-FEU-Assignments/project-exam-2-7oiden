import Heading from "./Heading";
import ButtonLink from "../buttons/ButtonLink";
import Wrapper from "./Wrapper";

function Hero() {
  return (
    <div className="hero hero__bg-image">
      <Wrapper cssClass="hero__wrapper">
        <hgroup>
          <Heading size="1" cssClass="hero__heading">
            Let <em>us</em> take care of your stay in <strong>Bergen.</strong>
          </Heading>
            <Heading size="2" cssClass="hero__sub-heading">
              <strong>Holidaze</strong> booking made easy.
            </Heading>
        </hgroup>
        <ButtonLink cssClass="btn-primary hero__button" linkTo="/overview">
          Explore
        </ButtonLink>
      </Wrapper>
    </div>
  );
}
export default Hero;
