import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import ProductsList from "../products/ProductsList";

function Overview() {
  return (
    <Layout>
      <div className="overview__bg-image"></div>
      <Wrapper cssClass="overview__wrapper">
        <ProductsList />
      </Wrapper>
    </Layout>
  );
}

export default Overview;
