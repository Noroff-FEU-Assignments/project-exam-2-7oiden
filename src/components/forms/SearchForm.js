import Form from "react-bootstrap/Form";
import SearchIcon from "../icons/SearchIcon";

function SearchForm({ setQuery, loading }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        <div className="custom-input-container">
          <Form.Control
            onKeyUp={(event) => setQuery(event.target.value)}
            className="custom-input"
            type="text"
            placeholder="Start searching..."
            disabled={loading}
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
