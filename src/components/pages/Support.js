import Layout from "../layout/Layout";
import Wrapper from "../layout/Wrapper";
import Heading from "../common/Heading";
import FaqAccordion from "../administration/FaqAccordion";
import ContactForm from "../forms/ContactForm";

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
