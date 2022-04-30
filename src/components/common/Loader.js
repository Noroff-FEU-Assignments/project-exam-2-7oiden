import Spinner from "react-bootstrap/Spinner";

export default function Loader() {
  return (
    <div className="loader-container">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}
