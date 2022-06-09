import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import Wrapper from "../layout/Wrapper";
import Heading from "../common/Heading";
import CategoryCard from "../layout/CategoryCard";
import CustomCarousel from "../carousels/CustomCarousel";
import hotels from "../../images/hotels.jpg";
import hostels from "../../images/hostels.jpg";
import apartments from "../../images/apartments.jpg";
import ButtonLink from "../buttons/ButtonLink";
import { QuoteIcon } from "../icons/MaterialIcons";

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
              Choose your flavour among Bergen's finest establishments:
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
        <div className="learn-more__container">
          <div className="learn-more__bg-image">
            <div className="learn-more__slogan-block">
              <div>
                <div className="slogan learn-more__slogan">
                  Sleep tight with Holidaze
                </div>
                <div className="learn-more__quote-wrapper">
                  <QuoteIcon color="#084c61" size="1.5rem" />
                  <div className="learn-more__quote">
                    Nobody knows Bergen like us
                  </div>
                </div>
              </div>
              <ButtonLink
                cssClass="btn-primary learn-more__button"
                linkTo="/about"
              >
                Learn more
              </ButtonLink>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
}

export default Home;
