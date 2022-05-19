import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import CategoryCard from "../layout/CategoryCard";
import Wrapper from "../layout/Wrapper";
import CustomCarousel from "../carousels/CustomCarousel";
import hotels from "../../images/hotels.jpg";
import hostels from "../../images/hostels.jpg";
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
              finest:
            </p>
          </div>
          <div className="category__container">
            <CategoryCard
              title="Hotels"
              image={hotels}
              alt="Interior of a hotel room with a view. The room has a queen sized bed and, a couch and a small coffee table."
            />
            <CategoryCard
              title="Hostels"
              image={hostels}
              alt="A cosy carpeted bedroom with a queen sized bed and a night table with a lit lamp."
            />
            <CategoryCard
              title="Apartments"
              image={apartments}
              alt="Interior of a small modern apartment with a kitchen and living space in one room."
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
