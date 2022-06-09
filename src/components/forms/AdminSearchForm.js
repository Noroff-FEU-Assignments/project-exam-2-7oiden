import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";

function AdminSearchForm({ setQuery, searchType }) {
  return (
    <Form className="adm__search-form">
      <InputGroup size="sm" className="adm__search-input">
        <Form.Control
          onKeyUp={(event) => setQuery(event.target.value)}
          size="sm"
          type="text"
          placeholder={`Search by ${searchType}`}
          aria-label={`Search by ${searchType}`}
        />
        <InputGroup.Text id="basic-addon1" className="adm__search-icon-box">
          <Icon
            path={mdiMagnify}
            className="adm__search-icon"
            color="#fff"
            size="1.375rem"
          />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}

export default AdminSearchForm;
