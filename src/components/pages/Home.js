import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import CategoryCard from "../layout/CategoryCard";
import Wrapper from "../layout/Wrapper";
import CustomCarousel from "../carousels/CustomCarousel";
import hotels from "../../images/hotels.jpg";
import motels from "../../images/motels.jpg";
import apartments from "../../images/apartments.jpg";

function Home() {
  return (
    <Layout>
      <Hero />
      <Wrapper cssClass="home__wrapper">
        <Heading size="3" cssClass="category__heading">
          Accomodation for every need
        </Heading>
        <p className="category__sub-heading">
          Choose your flavour among an increaslingly number of Bergen's
          finest—in our portfolio
        </p>
        <section className="category__container">
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
        </section>
        <CustomCarousel />
      </Wrapper>
    </Layout>
  );
}
export default Home;
