import Form from "react-bootstrap/Form";
import EmailIcon from "../icons/EmailIcon";

function NewsletterForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicNewsletter">
        {/* <Form.Label>Search</Form.Label> */}
        <div className="custom-input-container">
          <Form.Control
            className="custom-input"
            type="email"
            placeholder="Your Email"
          />
          <div className="custom-input-icon-box">
            <EmailIcon />
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
export default NewsletterForm;
