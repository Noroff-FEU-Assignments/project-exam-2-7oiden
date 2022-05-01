import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import AlertMessage from "../common/AlertMessage";
import Button from "react-bootstrap/Button"
import Heading from "../layout/Heading"

const schema = yup.object().shape({
  guests: yup.string().required("Please select number of guests"),

  firstname: yup
    .string()
    .required("Please enter your firstname")
    .min(3, "Your firstname must be at least 3 characters"),

  lastname: yup
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

  message: yup.string(),
});

export default function BookingForm() {
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
          message="Your booking request was successfully submitted"
        />
      )}

      <Form.Group className="mb-3" controlId="formBasicGuests">
        <Form.Label>Number of guests</Form.Label>
        <Form.Select aria-label="Default select example" {...register("guests")}>
          <option value="">Number of guests</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </Form.Select>
        {errors.guests && <FormError>{errors.guests.message}</FormError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicFirstname">
        <Form.Label>Firstname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Firstname"
          {...register("firstname")}
        />
        {errors.firstname && <FormError>{errors.firstname.message}</FormError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Lastname</Form.Label>
        <Form.Control
          type="text"
          placeholder="Lastname"
          {...register("lastname")}
        />
        {errors.lastname && <FormError>{errors.lastname.message}</FormError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" {...register("email")} />
        {errors.email && <FormError>{errors.email.message}</FormError>}
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message (optional)</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          placeholder="Start typing your message..."
          {...register("message")}
        />
        {errors.message && <FormError>{errors.message.message}</FormError>}
      </Form.Group>

      <Button className="primary-button form-button" type="submit">
        Send
      </Button>
    </Form>
  );
}
