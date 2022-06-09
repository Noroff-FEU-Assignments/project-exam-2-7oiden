import Wrapper from "./Wrapper";
import NewsletterForm from "../forms/NewsletterForm";

function Newsletter() {
  return (
    <div className="newsletter">
      <Wrapper cssClass="newsletter__wrapper">
        <div className="newsletter__container">
          <div className="newsletter__block">
            <p className="newsletter__heading">Sign up to our newsletter</p>
            <p className="newsletter__text">
              ...and be the first to find out about our{" "}
              <em className="newsletter__em">special offers.</em>
            </p>
          </div>
          <NewsletterForm />
        </div>
      </Wrapper>
    </div>
  );
}
export default Newsletter;
