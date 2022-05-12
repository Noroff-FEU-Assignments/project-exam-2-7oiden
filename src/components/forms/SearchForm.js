import Form from "react-bootstrap/Form";
import { SearchIcon } from "../icons/MaterialIcons";

function SearchForm({ setQuery, loading }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicSearch">
        <div className="custom-input-container">
          <Form.Control
            onKeyUp={(event) => setQuery(event.target.value)}
            className="custom-input"
            type="text"
            placeholder={loading ? "Please wait" : "Start typing..."}
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
