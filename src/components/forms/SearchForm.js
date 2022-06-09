import Form from "react-bootstrap/Form";
import { SearchIcon } from "../icons/MaterialIcons";

function SearchForm({ setQuery, loading }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        <div className="custom-input-container search-input-container">
          <Form.Control
            onKeyUp={(event) => setQuery(event.target.value)}
            className="custom-input"
            type="text"
            placeholder={loading ? "Please wait" : "Start typing..."}
            disabled={loading}
            aria-label="Search input"
          />
          <div className="custom-input__icon-box">
            <SearchIcon color="#fff" size="2rem" />
          </div>
        </div>
      </Form.Group>
    </Form>
  );
}

export default SearchForm;
