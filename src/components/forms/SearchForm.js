import Form from "react-bootstrap/Form";
import SearchIcon from "../icons/SearchIcon";

function SearchForm({setQuery}) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        <div className="custom-input-container">
          <Form.Control
            onChange={(event) => setQuery(event.target.value)}
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
export default SearchForm
