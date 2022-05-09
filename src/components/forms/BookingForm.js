import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import AlertMessage from "../common/AlertMessage";
import Button from "react-bootstrap/Button";
import { BOOKING_URL } from "../../constants/api";
import DatePicker from "react-widgets/DatePicker";

const schema = yup.object().shape({
  // from_date: yup.string().required("Please select from date"),

  // to_date: yup.string().required("Please select to date"),

  guests: yup.string().required("Please select number of guests"),

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

  message: yup.string(),
});

export default function BookingForm({ establishment, location }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [date, setDate] = useState(new Date());

  const url = BOOKING_URL;

  const {
    register,
    handleSubmit,
    handleChange,
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
    // console.log(data);
    // setSubmitted(true);
    // reset();

    const jsonData = {
      data: {
        establishment: establishment,
        location: location,
        from_date: date,
        to_date: date,
        guests: data.guests,
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
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
    <Form onSubmit={handleSubmit(onSubmit)}>
      {submitted && (
        <AlertMessage
          variant="success"
          message="Your booking request was successfully submitted"
        />
      )}
      {serverError && <FormError>{serverError}</FormError>}
      <fieldset disabled={submitting}>
        <div className="date-picker-wrapper">
          <Form.Group className="mb-3" controlId="formBasicGuests">
            <Form.Label>From date</Form.Label>
            {/* <DatePicker
              defaultValue={new Date()}
              valueFormat={{ dateStyle: "medium" }}
              value={current}
              onChange={setCurrent}
              {...register("from_date")}
            /> */}
            {errors.from_date && (
              <FormError>{errors.from_date.message}</FormError>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicGuests">
            <Form.Label>To date</Form.Label>
            {/* <DatePicker
              id="to_date"
              type="date"
              defaultValue={new Date()}
              valueFormat={{ dateStyle: "medium" }}
              name="toDate"
              value={date}
              onChange={(date) =>
                handleChange({ target: { value: date, name: "toDate" } })
              }
              {...register("toDate")}
            /> */}
            {errors.to_date && <FormError>{errors.to_date.message}</FormError>}
          </Form.Group>
        </div>
        <Form.Group className="mb-3" controlId="formBasicGuests">
          <Form.Label>Number of guests</Form.Label>
          <Form.Select
            aria-label="Default select example"
            {...register("guests")}
          >
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
      </fieldset>
    </Form>
  );
}
