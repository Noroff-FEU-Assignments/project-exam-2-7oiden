import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import CategoryCard from "../layout/CategoryCard";
import Wrapper from "../layout/Wrapper";
import CustomCarousel from "../carousels/CustomCarousel";
import hotels from "../../images/hotels.jpg";
import motels from "../../images/motels.jpg";
import apartments from "../../images/apartments.jpg";
import ButtonLink from "../buttons/ButtonLink";

function Home() {
  return (
    <Layout>
      <Hero />
      <Wrapper cssClass="home__wrapper">
        <section>
          <div className="category__header">
            <Heading size="3" cssClass="category__heading">
              Accomodation for every need
            </Heading>
            <p className="category__sub-heading">
              Choose your flavour among an increaslingly number of Bergen's
              finest<br/>—in our portfolio
            </p>
          </div>
          <div className="category__container">
            <CategoryCard title="Hotels" image={hotels} category="hotel" />
            <CategoryCard
              title="Motels"
              image={motels}
              // category="motel"
            />
            <CategoryCard
              title="Apartments"
              image={apartments}
              // category="apartment"
            />
          </div>
        </section>
        <CustomCarousel />
        <section className="learn-more__container">
          <div className="learn-more__bg-image">
            <Heading size="2" cssClass="learn-more__slogan">
              Sleep tight with Holidaze
            </Heading>
            <ButtonLink
              cssClass="btn-primary learn-more__button"
              linkTo="/about"
            >
              Learn more
            </ButtonLink>
          </div>
        </section>
      </Wrapper>
    </Layout>
  );
}
export default Home;
