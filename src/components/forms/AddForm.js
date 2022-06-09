import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import {
  PRODUCTS_URL,
  CONSUMER_KEY,
  CONSUMER_SECRET,
  PLACEHOLDER_IMG_URL,
} from "../../constants/api";
import AlertMessage from "../common/AlertMessage";
import Heading from "../common/Heading";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import { CopyIcon } from "../icons/MaterialIcons";
import FormError from "../common/FormError";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter the establishments name")
    .min(5, "Establishment name must be at least 5 characters")
    .max(25, "Establishment name can't be more than 25 characters"),

  address: yup
    .string()
    .required("Please enter the establishments street address")
    .min(5, "Street address must be at least 5 characters")
    .max(25, "Street address can't be more than 25 characters"),

  beds: yup.number().min(1, "Number of beds must be at least 1"),

  category: yup.string().required("Please select a category"),

  price: yup
    .number()
    .required("Please enter a price")
    .typeError("Please enter a price")
    .integer("Price must be a whole number")
    .min(300, "Price must be at least 300 NOK")
    .max(10000, "Price can't be more than 10.000 NOK"),

  description: yup
    .string()
    .required("Please add a description of the establishment")
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description can't be more than 500 characters"),

  image: yup
    .string()
    .required("Please provide a valid image link")
    .url("Please enter a valid URL")
    .matches(".jpg", "Please add a valid JPG file"),

  wifi: yup.bool(),

  television: yup.bool(),

  central: yup.bool(),

  gym: yup.bool(),

  parking: yup.bool(),

  restaurant: yup.bool(),

  breakfast: yup.bool(),

  pets: yup.bool(),

  kitchen: yup.bool(),

  other: yup.string(),
});

export default function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(null);
  const [show, setShow] = useState(false);

  const url = PRODUCTS_URL + CONSUMER_KEY + CONSUMER_SECRET;

  const placeholderUrl = PLACEHOLDER_IMG_URL;

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

    //adds a category according to wp category-id
    let categoryId = 34;

    if (data.category.toLowerCase() === "hotel") {
      categoryId = 35;
    } else if (data.category.toLowerCase() === "hostel") {
      categoryId = 62;
    } else if (data.category.toLowerCase() === "apartment") {
      categoryId = 37;
    }

    //adds a tag according to wp tag-id
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

    let gymTagId = undefined;

    if (data.gym === true) {
      gymTagId = 44;
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

    let kitchenTagId = undefined;

    if (data.kitchen === true) {
      kitchenTagId = 65;
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
          id: gymTagId,
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
          id: kitchenTagId,
        },
        {
          name: data.other,
        },
      ],
    };

    // console.log(jsonData);

    try {
      const response = await axios.post(url, jsonData);
      console.log("response", response.data);
      setSubmitted(true);
      setShow(true);
    } catch (error) {
      console.log("error", error);
      setServerError(
        `${error.toString()} 
        Please make sure to upload a valid image file`
      );
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

  function copy(imgUrl) {
    navigator.clipboard.writeText(imgUrl);
  }

  return (
    <>
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
              <option value="hostel">Hostel</option>
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
              controlId="formBasicPrice"
            >
              <Form.Label>Price/night</Form.Label>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">NOK</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Price/night"
                  {...register("price")}
                />
              </InputGroup>
              {errors.price && <FormError>{errors.price.message}</FormError>}
            </Form.Group>
          </div>
          <Form.Group className="mb-3" controlId="formBasicDescription">
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
          <Form.Label>Image</Form.Label>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
            <Form.Control
              type="text"
              aria-label="Image URL"
              aria-describedby="basic-addon1"
              {...register("image")}
            />
          </InputGroup>
          {errors.image && <FormError>{errors.image.message}</FormError>}
          <div className="copy-msg__wrapper">
            <span>Copies a placeholder image-URL to the clipboard:</span>
            <Button
              variant="light"
              className="copy-msg__icon-box"
              onClick={() => copy(placeholderUrl)}
              aria-label="copy placeholder image to clipboard"
            >
              <CopyIcon color="#fff" size="1.25rem" />
            </Button>
          </div>
          <Alert variant="warning" className="form__warning">
            <ul className="form__warning-list">
              <li className="form__warning-list-item">
                Images must have a 3:2 aspect ratio to be displayed correctly
              </li>
              <li className="form__warning-list-item">
                Only JPG file format is accepted
              </li>
              <li className="form__warning-list-item">
                File size should be no more than 200kB
              </li>
            </ul>
          </Alert>
          <fieldset className="form-check-fieldset">
            <legend>Facilities</legend>
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3 form-check-wrapper">
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
                  id="gym"
                  label="Gym"
                  name="gym"
                  {...register("gym")}
                />
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
                <Form.Check
                  type={type}
                  id="kitchen"
                  label="Kitchen"
                  name="pets"
                  {...register("kitchen")}
                />
              </div>
            ))}
            <Form.Group className="mb-3" controlId="formBasicFacility">
              <Form.Label>Other facility (optional)</Form.Label>
              <Form.Control
                className="other-facility-input"
                type="text"
                placeholder="Specify"
                size="sm"
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
          <Button className="admin-button" type="submit">
            Add
          </Button>
        </fieldset>
      </Form>
    </>
  );
}
