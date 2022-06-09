import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { HEROKU_BASE_URL } from "../../constants/api";
import axios from "axios";
import AlertMessage from "../common/AlertMessage";
import Heading from "../common/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("Please enter your firstname")
    .min(3, "Your firstname must be at least 3 characters")
    .max(10, "Firstname can't be more than 10 characters"),

  last_name: yup
    .string()
    .required("Please enter your lastname")
    .min(4, "Your lastname must be at least 4 characters")
    .max(12, "Lastname can't be more than 12 characters"),

  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),

  subject: yup
    .string()
    .required("Please enter a subject")
    .min(4, "Subject must be at least 4 characters")
    .max(20, "Subject can't be more than 20 characters"),

  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must be at least 10 characters")
    .max(400, "Message can't be more than 400 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [show, setShow] = useState(false);

  const url = HEROKU_BASE_URL + "contacts";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setServerError(null);
    // console.log(data);
    reset();

    const jsonData = {
      data: {
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
    };

    try {
      const response = await axios.post(url, jsonData);
      console.log("response", response.data);
      setSubmitted(true);
      setShow(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [show]);

  return (
    <div className="contact__container" id="contact-section">
      <Heading size="3" cssClass="form-heading">
        Contact
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3" controlId="formBasicFirstname">
            <Form.Label>Firstname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Firstname"
              {...register("first_name")}
            />
            {errors.first_name && (
              <FormError>{errors.first_name.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Lastname"
              {...register("last_name")}
            />
            {errors.last_name && (
              <FormError>{errors.last_name.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Email"
              {...register("email")}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control
              type="text"
              placeholder="Subject"
              {...register("subject")}
            />
            {errors.subject && <FormError>{errors.subject.message}</FormError>}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              placeholder="Start typing your message..."
              {...register("message")}
            />
            {errors.message && <FormError>{errors.message.message}</FormError>}
          </Form.Group>
          {submitted && (
            <AlertMessage
              variant="success"
              message="Your message was successfully submitted. We will get back to you shortly."
              show={show}
            />
          )}
          {serverError && (
            <AlertMessage variant="danger" message={serverError} />
          )}
          <Button className="form-button" type="submit">
            Submit
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}
