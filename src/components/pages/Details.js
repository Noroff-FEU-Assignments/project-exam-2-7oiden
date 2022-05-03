
import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import ProductDetails from "../products/ProductDetails";

function Details() {
  return (
    <Layout>
      <Wrapper cssClass="details__wrapper">
        <ProductDetails />
      </Wrapper>
    </Layout>
  );
}
export default Details;
