import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function AdminSearchForm({ setQuery, searchType }) {
  return (
    <Form className="adm__search-form">
      <InputGroup size="sm">
        <Form.Control
          onKeyUp={(event) => setQuery(event.target.value)}
          size="sm"
          type="text"
          placeholder={`Search by ${searchType}`}
        />
        <InputGroup.Text id="basic-addon1">
          <Icon
            path={mdiMagnify}
            className="adm__search-icon"
            color="default"
          />
        </InputGroup.Text>
      </InputGroup>
    </Form>
  );
}
export default AdminSearchForm;
