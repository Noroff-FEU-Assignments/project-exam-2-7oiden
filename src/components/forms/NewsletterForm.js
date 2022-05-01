import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../common/FormError";
import AlertMessage from "../common/AlertMessage";
import Form from "react-bootstrap/Form";
import EmailIcon from "../icons/EmailIcon";

const schema = yup.object().shape({

  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address")
});

function NewsletterForm() {

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
    setSubmitted(true);
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {submitted && (
        <AlertMessage
          variant="success"
          message="Thank you for subscribing to our newsletter!"
        />
      )}
      <Form.Group className="mb-3" controlId="formBasicNewsletter">
        {/* <Form.Label>Email</Form.Label> */}
        <div className="custom-input-container">
          <Form.Control
            className="custom-input"
            type="text"
            placeholder="Your Email"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
          <button className="custom-input-icon-box newsletter-button">
            <EmailIcon />
          </button>
        </div>
      </Form.Group>
    </Form>
  );
}
export default NewsletterForm;
