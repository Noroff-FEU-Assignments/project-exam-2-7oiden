import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../context/AuthContext";
import axios from "axios";
import { WP_BASE_URL, TOKEN_PATH } from "../../constants/api";
import AlertMessage from "../common/AlertMessage";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import FormError from "../common/FormError";

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

  const [, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

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
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="name@example.com"
            className="mb-3"
            {...register("username")}
          />
          {errors.username && <FormError>{errors.username.message}</FormError>}
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && <FormError>{errors.password.message}</FormError>}
        </FloatingLabel>
        <Button className="form-button log-button" type="submit">
          {submitting ? "Please wait..." : "Login"}
        </Button>
      </fieldset>
    </Form>
  );
}

export default LoginForm;
