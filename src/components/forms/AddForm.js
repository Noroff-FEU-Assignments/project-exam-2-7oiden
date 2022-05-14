import axios from "axios";
import { useState, useEffect } from "react";
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

  beds: yup.number().min(1, "Number of beds must be at least 1"),

  category: yup.string().required("Please select number a category"),

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

  image: yup.string().required("Please provide a image URL"),

  wifi: yup.bool(),

  television: yup.bool(),

  central: yup.bool(),

  bar: yup.bool(),

  parking: yup.bool(),

  restaurant: yup.bool(),

  breakfast: yup.bool(),

  pets: yup.bool(),

  other: yup.string(),
});

export default function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [show, setShow] = useState(false);

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET;

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

    //adds category according to category-id
    let categoryId = 34;

    if (data.category.toLowerCase() === "hotel") {
      categoryId = 35;
    } else if (data.category.toLowerCase() === "bed and breakfast") {
      categoryId = 36;
    } else if (data.category.toLowerCase() === "apartment") {
      categoryId = 37;
    }

    //adds tag according to tag-id
    let wifiTagId = undefined;

    if (data.wifi === true) {
      wifiTagId = 43;
    }

    let tvTagId = undefined;

    if (data.television === true) {
      tvTagId = 47;
    }

    let centralTagId = undefined;

    if (data.central === true) {
      centralTagId = 48;
    }

    let barTagId = undefined;

    if (data.bar === true) {
      barTagId = 44;
    }

    let parkingTagId = undefined;

    if (data.parking === true) {
      parkingTagId = 45;
    }

    let restaurantTagId = undefined;

    if (data.restaurant === true) {
      restaurantTagId = 49;
    }

    let breakfastTagId = undefined;

    if (data.breakfast === true) {
      breakfastTagId = 46;
    }

    let petsTagId = undefined;

    if (data.pets === true) {
      petsTagId = 59;
    }

    const jsonData = {
      name: data.name,
      sku: data.address,
      regular_price: data.price.toString(),
      description: data.description,
      manage_stock: true,
      stock_quantity: data.beds,
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
      tags: [
        {
          id: wifiTagId,
        },
        {
          id: tvTagId,
        },
        {
          id: centralTagId,
        },
        {
          id: barTagId,
        },
        {
          id: parkingTagId,
        },
        {
          id: restaurantTagId,
        },
        {
          id: breakfastTagId,
        },
        {
          id: petsTagId,
        },
        {
          name: data.other,
        },
      ],
    };

    console.log(jsonData);

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
    <div className="add__container">
      <Heading size="1" cssClass="form-heading">
        Add establishment
      </Heading>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
                type="number"
                {...register("beds")}
              >
                <option value="0">Number of beds</option>
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
              <div className="input-price-container">
                <Form.Control
                  type="text"
                  placeholder="Price/night"
                  {...register("price")}
                />
                <div className="input-prefix">NOK</div>
              </div>
              {errors.price && <FormError>{errors.price.message}</FormError>}
            </Form.Group>
          </div>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              rows="6"
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
                    id="wifi"
                    label="Wifi"
                    name="wifi"
                    {...register("wifi")}
                  />
                  <Form.Check
                    type={type}
                    id="Television"
                    label="Television"
                    name="television"
                    {...register("television")}
                  />
                  <Form.Check
                    type={type}
                    id="central"
                    label="Central"
                    name="central"
                    {...register("central")}
                  />
                  <Form.Check
                    type={type}
                    id="bar"
                    label="Bar"
                    name="bar"
                    {...register("bar")}
                  />
                </div>
                <div>
                  <Form.Check
                    type={type}
                    id="parking"
                    label="Parking"
                    name="parking"
                    {...register("parking")}
                  />
                  <Form.Check
                    type={type}
                    id="restaurant"
                    label="Restaurant"
                    name="restaurant"
                    {...register("restaurant")}
                  />
                  <Form.Check
                    type={type}
                    id="breakfast"
                    label="Free breakfast"
                    name="breakfast"
                    {...register("breakfast")}
                  />
                  <Form.Check
                    type={type}
                    id="pets"
                    label="Pets allowed"
                    name="pets"
                    {...register("pets")}
                  />
                </div>
              </div>
            ))}
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Other facility</Form.Label>
              <Form.Control
                className="other-facility-input"
                type="text"
                placeholder="Specify"
                {...register("other")}
              />
            </Form.Group>
          </fieldset>
          {serverError && (
            <AlertMessage variant="danger" message={serverError} />
          )}
          {submitted && (
            <AlertMessage
              variant="success"
              message="New establishment was successfully added"
              show={show}
            />
          )}
          <Button className="admin-button form-button" type="submit">
            Add
          </Button>
        </fieldset>
      </Form>
    </div>
  );
}
