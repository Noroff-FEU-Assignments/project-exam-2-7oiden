import ContactForm from "../forms/ContactForm";
import FaqAccordion from "../administration/FaqAccordion";
import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Heading from "../common/Heading";

function Support() {
  return (
    <Layout>
      <Wrapper cssClass="support__wrapper">
        <Heading size="1" cssClass="support__heading">
          Support
        </Heading>
        <div className="support__container">
          <FaqAccordion />
          <ContactForm />
        </div>
      </Wrapper>
    </Layout>
  );
}
export default Support;
