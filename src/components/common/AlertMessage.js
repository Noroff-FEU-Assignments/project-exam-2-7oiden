import PropTypes from "prop-types";
import Alert from "react-bootstrap/Alert";

export default function AlertMessage({ variant, message, show }) {
  return <Alert show={show} variant={variant}>{message}</Alert>;
}

AlertMessage.propTypes = {
  variant: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

AlertMessage.defaultProps = {
  variant: "warning",
  content: "Something is not working correctly",
};
