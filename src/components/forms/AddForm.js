import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import AlertMessage from "../common/AlertMessage";
import Button from "react-bootstrap/Button";
import Heading from "../layout/Heading";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
} from "../../constants/api";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter the establishments name")
    .min(5, "Establishment name must be at least 5 characters"),

  address: yup
    .string()
    .required("Please enter the establishments street address")
    .min(5, "Street address must be at least 5 characters"),

  beds: yup.string().required("Please select number of beds"),

  category: yup.string().required("Please select number of beds"),

  price: yup
    .number()
    .required("Please enter a price")
    .typeError("Please enter a price")
    .required("Please enter your age")
    .integer("Price must be a whole number"),

  description: yup
    .string()
    .required("Please enter the establishments street address")
    .min(10, "Please add a description of the establishment"),

  image: yup.string().required("Please enter the establishments name"),
});

export default function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET;

  // const history = useNavigate();
  // const http = useAxios();

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

    let categoryId = 34;

    console.log(data.category);

    if (data.category.toLowerCase() === "hotel") {
      categoryId = 35;
    } else if (data.category.toLowerCase() === "bed and breakfast") {
      categoryId = 36;
    } else if (data.category.toLowerCase() === "apartment") {
      categoryId = 37;
    }

    const jsonData = {
      name: data.name,
      sku: data.address,
      regular_price: data.price.toString(),
      description: data.description,
      categories: [
        {
          id: categoryId,
        },
      ],
      images: [
        {
          src: data.image,
        },
      ],
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
    <div className="add__container">
      <Heading size="1" cssClass="form-heading">
        Add establishment
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {submitted && (
          <AlertMessage
            variant="success"
            message="New establishment was successfully added"
          />
        )}
        {serverError && <FormError>{serverError}</FormError>}
        <fieldset disabled={submitting}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              {...register("name")}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Street address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Street address"
              {...register("address")}
            />
            {errors.address && <FormError>{errors.address.message}</FormError>}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCategory">
            <Form.Label>Category</Form.Label>
            <Form.Select
              aria-label="Default select example"
              {...register("category")}
            >
              <option value="">Select a category</option>
              <option value="hotel">Hotel</option>
              <option value="bed and breakfast">Bed & Breakfast</option>
              <option value="apartment">Apartment</option>
            </Form.Select>
            {errors.category && (
              <FormError>{errors.category.message}</FormError>
            )}
          </Form.Group>

          <div className="form-input-wrapper">
            <Form.Group className="mb-3" controlId="formBasicBeds">
              <Form.Label>Number of beds</Form.Label>
              <Form.Select
                aria-label="Default select example"
                {...register("beds")}
              >
                <option value="">Number of beds</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Form.Select>
              {errors.beds && <FormError>{errors.beds.message}</FormError>}
            </Form.Group>

            <Form.Group
              className="mb-3 relative-input"
              controlId="formBasicAddress"
            >
              <Form.Label>Price/night</Form.Label>
              <Form.Control
                type="text"
                placeholder="Price/night"
                {...register("price")}
              />
              <div className="input-prefix">NOK</div>
              {errors.price && <FormError>{errors.price.message}</FormError>}
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Description"
              {...register("description")}
            />
            {errors.description && (
              <FormError>{errors.description.message}</FormError>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image URL"
              {...register("image")}
            />
            {errors.image && <FormError>{errors.image.message}</FormError>}
          </Form.Group>

          <fieldset className="form-check-fieldset">
            <legend>Facilities</legend>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3 form-check-wrapper">
                <div>
                  <Form.Check
                    type={type}
                    id="WIFI"
                    label="WIFI"
                    {...register("wifi")}
                  />
                  <Form.Check
                    type={type}
                    id="Television"
                    label="Television"
                    {...register("television")}
                  />
                  <Form.Check
                    type={type}
                    id="central"
                    label="Central"
                    {...register("central")}
                  />
                  <Form.Check
                    type={type}
                    id="bar"
                    label="Bar"
                    {...register("bar")}
                  />
                </div>
                <div>
                  <Form.Check
                    type={type}
                    id="parking"
                    label="Parking"
                    {...register("parking")}
                  />
                  <Form.Check
                    type={type}
                    id="refridgerator"
                    label="Refridgerator"
                    {...register("refridgerator")}
                  />
                  <Form.Check
                    type={type}
                    id="breakfast"
                    label="Free breakfast"
                    {...register("breakfast")}
                  />
                  <Form.Check
                    type={type}
                    id="pets"
                    label="Pets Allowed"
                    {...register("pets")}
                  />
                </div>
              </div>
            ))}
          </fieldset>

          <Button className="admin-button form-button" type="submit">
            Add
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}
