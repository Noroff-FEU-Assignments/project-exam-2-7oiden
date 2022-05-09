import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { WP_BASE_URL, TOKEN_PATH } from "../../constants/api";
import Form from "react-bootstrap/Form";
import FormError from "../common/FormError";
import Button from "react-bootstrap/Button";
import AlertMessage from "../common/AlertMessage";

const loginUrl = WP_BASE_URL + TOKEN_PATH;

const schema = yup.object().shape({
  username: yup.string().required("Please enter your username"),
  password: yup.string().required("Please enter your password"),
});

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const history = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    // console.log(data);

    try {
      const response = await axios.post(loginUrl, data);
      // console.log("response:", response.data);
      setAuth(response.data);
      history("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loginError && (
        <AlertMessage
          variant="warning"
          message="Username and/or password is incorrect"
        />
      )}
      <fieldset disabled={submitting}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            {...register("username")}
          />
          {errors.username && <FormError>{errors.username.message}</FormError>}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </Form.Group>
        <Button className="primary-button form-button" type="submit">
          {submitting ? " Please wait..." : "Login"}
        </Button>
      </fieldset>
    </Form>
  );
}

export default LoginForm;
