import Form from "react-bootstrap/Form";
import SearchIcon from "../icons/SearchIcon";

function SearchForm() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        {/* <Form.Label>Search</Form.Label> */}
        <div className="custom-input-container">
          <Form.Control
            className="custom-input"
            type="text"
            placeholder="Start searching..."
          />
          <div className="custom-input-icon-box">
            <SearchIcon />
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}
export default SearchForm;
