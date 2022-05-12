import axios from "axios";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import AlertMessage from "../common/AlertMessage";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Heading from "../layout/Heading";
import { useNavigate, useLocation } from "react-router-dom";

const schema = yup.object().shape({
  reviewer: yup
    .string()
    .required("Please enter your firstname")
    .min(4, "Your firstname must be at least 4 characters"),

  rating: yup.string().required("Please select a rating"),

  review: yup
    .string()
    .required("Please enter your message")
    .min(10, "Your review must be at least 10 characters"),
});

function ReviewForm({ id }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [show, setShow] = useState(false);

  const reviewsUrl = PRODUCTS_URL + "/reviews" + CONSUMER_KEY + CONSUMER_SECRET;

  const history = useNavigate();
  const location = useLocation();

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
      product_id: parseInt(id),
      status: "approved",
      rating: parseInt(data.rating),
      reviewer_email: "7oiden@gmail.com",
      reviewer: data.reviewer,
      review: data.review,
    };

    // console.log(jsonData);

    try {
      const response = await axios.post(reviewsUrl, jsonData);
      console.log("response", response.data);
      setSubmitted(true);
      setShow(true)
      history(location.pathname);
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
    <Form onSubmit={handleSubmit(onSubmit)} className="review__form">
      {submitted && (
        <AlertMessage
          variant="success"
          message="Thank you for your feedback!"
          show={show}
        />
      )}
      {serverError && <FormError>{serverError}</FormError>}
      <Heading size="4" cssClass="reviews__heading">
        Leave a review
      </Heading>
      <fieldset disabled={submitting} className="reviews__fieldset">
        <FloatingLabel
          controlId="floatingInput"
          label="Your name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Your name"
            {...register("reviewer")}
          />
          {errors.reviewer && <FormError>{errors.reviewer.message}</FormError>}
        </FloatingLabel>

        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Select
            aria-label="Default select example"
            className="reviews__rating-input"
            {...register("rating")}
          >
            <option value="">Your rating</option>
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 stars</option>
          </Form.Select>
          {errors.rating && <FormError>{errors.rating.message}</FormError>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicRating">
          <Form.Control
            as="textarea"
            placeholder="Start writing your review"
            className="reviews__text-area"
            {...register("review")}
          />
          {errors.review && <FormError>{errors.review.message}</FormError>}
        </Form.Group>

        <Button className="form-button" type="submit">
          Submit
        </Button>
      </fieldset>
    </Form>
  );
}
export default ReviewForm;
