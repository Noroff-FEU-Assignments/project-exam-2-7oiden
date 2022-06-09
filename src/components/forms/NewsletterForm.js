import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AlertMessage from "../common/AlertMessage";
import Form from "react-bootstrap/Form";
import { EmailIcon } from "../icons/MaterialIcons";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
});

function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const [show, setShow] = useState(false);

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
    setShow(true);
    reset();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {submitted && (
        <AlertMessage
          variant="success"
          message="Thank you for subscribing to our newsletter!"
          show={show}
        />
      )}
      <Form.Group className="mb-3" controlId="formBasicNewsletter">
        <div className="custom-input-container">
          <Form.Control
            className="custom-input"
            type="text"
            placeholder="Your Email"
            aria-label="Email"
            {...register("email")}
          />
          {errors.email && <FormError>{errors.email.message}</FormError>}
          <button
            className="custom-input__icon-box newsletter-button"
            aria-label="Send button"
          >
            <EmailIcon color="#ffffff" size="2rem" />
          </button>
        </div>
      </Form.Group>
    </Form>
  );
}
export default NewsletterForm;
