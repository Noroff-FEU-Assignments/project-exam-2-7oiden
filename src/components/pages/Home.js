import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import CategoryCard from "../layout/CategoryCard";
import Wrapper from "../layout/Wrapper";
import CustomCarousel from "../products/CustomCarousel";
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
        <div className="category__flexbox">
          <CategoryCard title="Hotels" image={hotels} category="hotels" />
          <CategoryCard
            title="Bed & Breakfast"
            image={bab}
            category="bed_and_breakfast"
          />
          <CategoryCard
            title="Apartments"
            image={apartments}
            category="apartments"
          />
        </div>
      </Wrapper>
      <Wrapper cssClass="carousel__wrapper">
        <CustomCarousel />
      </Wrapper>
    </Layout>
  );
}
export default Home;
