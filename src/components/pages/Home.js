import Heading from "../layout/Heading";
import Layout from "../layout/Layout";
import Hero from "../layout/Hero";
import CategoryCard from "../products/CategoryCard";
import Wrapper from "../layout/Wrapper";
import CustomCarousel from "../products/CustomCarousel";
import hotels from "../../images/hotels.jpg";
import bab from "../../images/bed-and-breakfast.jpg";
import apartments from "../../images/apartments.jpg";

function Home() {
  return (
    <Layout>
      <Hero />
      <Wrapper cssClass="category-wrapper">
        <Heading size="3" cssClass="category-heading">
          Browse by category
        </Heading>
        <div className="category-flexbox">
          <CategoryCard title="Hotels" image={hotels} />
          <CategoryCard title="Bed & Breakfast" image={bab} />
          <CategoryCard title="Apartments" image={apartments} />
        </div>
      </Wrapper>
      <Wrapper cssClass="carousel-wrapper">
        <CustomCarousel />
      </Wrapper>
    </Layout>
  );
}
export default Home;