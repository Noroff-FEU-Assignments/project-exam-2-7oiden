import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import AlertMessage from "../common/AlertMessage";
import Button from "react-bootstrap/Button";
import Heading from "../layout/Heading";
import { CONTACT_URL } from "../../constants/api";

const schema = yup.object().shape({
  first_name: yup
    .string()
    .required("Please enter your firstname")
    .min(3, "Your firstname must be at least 3 characters"),

  last_name: yup
    .string()
    .required("Please enter your lastname")
    .min(4, "Your lastname must be at least 4 characters"),

  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),

  subject: yup
    .string()
    .required("Please enter your lastname")
    .min(4, "Subject must be at least 4 characters"),

  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your message must be at least 10 characters"),
});

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const url = CONTACT_URL;

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
    console.log(data);
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

    console.log(jsonData);

    try {
      const response = await axios.post(url, jsonData);
      console.log("response", response.data);
      setSubmitted(true);
    } catch (error) {
      console.log("error", error);
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="contact__container" id="contact-section">
      <Heading size="3" cssClass="form-heading">
        Contact
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {submitted && (
          <AlertMessage
            variant="success"
            message="Your message was successfully submitted"
          />
        )}
        {serverError && <AlertMessage variant="danger" message={serverError} />}
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
            {errors.lastname && (
              <FormError>{errors.lastname.message}</FormError>
            )}
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

          <Button className="form-button" type="submit">
            Submit
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}
