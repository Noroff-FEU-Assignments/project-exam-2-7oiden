import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import CategoryCard from "../layout/CategoryCard";
import Wrapper from "../layout/Wrapper";
import CustomCarousel from "../carousels/CustomCarousel";
import hotels from "../../images/hotels.jpg";
import bab from "../../images/bed-and-breakfast.jpg";
import apartments from "../../images/apartments.jpg";

function Home() {
  return (
    <Layout>
      <Hero />
      <Wrapper cssClass="category__wrapper">
        <Heading size="3" cssClass="category__heading">
          Browse by category
        </Heading>
        <section className="category__flexbox">
          <CategoryCard title="Hotels" image={hotels} category="hotel" />
          <CategoryCard
            title="Bed & Breakfast"
            image={bab}
            category="bed-and-breakfast"
          />
          <CategoryCard
            title="Apartments"
            image={apartments}
            category="apartment"
          />
        </section>
      </Wrapper>
      <Wrapper cssClass="carousel__wrapper">
        <CustomCarousel />
      </Wrapper>
    </Layout>
  );
}
export default Home;
