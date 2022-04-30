import ContactForm from "../forms/ContactForm";
import FaqAccordion from "../accordions/FaqAccordion";
import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Heading from "../layout/Heading";
import Newsletter from "../layout/Newsletter";
// import FlexContainer from "../layout/FlexContainer";

function Support() {
  return (
    <Layout>
      <Wrapper cssClass="support-wrapper">
        <Heading size="1" cssClass="support-heading">
          Support
        </Heading>
        <div className="support-flexbox">
          <FaqAccordion />
          <ContactForm />
        </div>
      </Wrapper>
    </Layout>
  );
}
export default Support;
